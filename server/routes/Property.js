const { Property } = require('../models/Property');
const upload = require('../image_uploader');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add property form
router.get("/new", async (req, res) => {
  res.render("add_property", { errors: [], property: {} });
});

// Render edit property form
router.get("/:id/edit", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Property not found");
    }
    res.render("edit_property", { errors: [], property: property });
  } catch (err) {
    res.status(500).send("An error occurred while fetching the property");
  }
});

/**************************************************************************************************/
// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find().sort("name");
  res.render("properties", { properties });
});

/**************************************************************************************************/
// Get property by ID
router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return res.status(404).send("The property is not available");
  }
  res.render("view_property", { property });
});

/**************************************************************************************************/
// Adding property
router.post("/", upload.single('img'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Property image is required..');
  }

  const propertyImgPath = req.file.path.replace(/\\/g, '/'); // Normalize backslashes to forward slashes

  let property = new Property({
    category: req.body.category,
    name: req.body.name,
    location: req.body.location,
    author: req.body.author,
    BedsNo: req.body.BedsNo,
    BathsNo: req.body.BathsNo,
    sqFt: req.body.sqFt,
    price: req.body.price,
    img: {
      data: req.file.buffer, // Save the image buffer if you need it
      contentType: req.file.mimetype // Save the image MIME type
    },
    // If you need to handle an author image, you can do it similarly here
  });

  try {
    property = await property.save();
    res.status(201).redirect("/properties");
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

/**************************************************************************************************/
// Updating property
router.put("/:id", upload.single('img'), async (req, res) => {
  let property = await Property.findById(req.params.id);
  if (!property) return res.status(404).send('The property with the given ID was not found');

  // Prepare the updated data
  const updatedData = {
    category: req.body.category,
    name: req.body.name,
    location: req.body.location,
    author: req.body.author,
    BedsNo: req.body.BedsNo,
    BathsNo: req.body.BathsNo,
    sqFt: req.body.sqFt,
    price: req.body.price,
  };

  if (req.file) {
    updatedData.img = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };
  }

  // Update the property in the database
  property = await Property.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(property);
});

/**************************************************************************************************/
// Deleting property
router.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).send("The property is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});

module.exports = router;
