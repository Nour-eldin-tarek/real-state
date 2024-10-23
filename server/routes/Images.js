const { Images, handleImagesValidation } = require('../models/Images'); // Adjust the path as necessary
const upload = require('../image_uploader');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add image form
router.get("/new", (req, res) => {
    res.render("add_image", { errors: [], image: {} });
});

// Render edit image form
router.get("/:id/edit", async (req, res) => {
    try {
        const image = await Images.findById(req.params.id);
        if (!image) {
            return res.status(404).send("Image not found");
        }
        res.render("edit_image", { errors: [], image: image });
    } catch (err) {
        res.status(500).send("An error occurred while fetching the image");
    }
});

/**************************************************************************************************/
// Get all images
router.get("/", async (req, res) => {
    const images = await Images.find().sort("category");
    res.render("images", { images }); // Render the images html (ejs)
});

/**************************************************************************************************/
// Get image by ID
router.get("/:id", async (req, res) => {
    const image = await Images.findById(req.params.id);
    if (!image) {
        return res.status(404).send("The image is not available");
    }
    res.render("view_image", { image });
});

/**************************************************************************************************/
// Adding image
router.post("/", upload.single('img'), async (req, res) => {
    const { error } = handleImagesValidation(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).render('add_image', { errors: errorMessages, image: req.body });
    }

    if (!req.file) {
        return res.status(400).send('Image is required..');
    }

    const imagePath = req.file.path.replace(/\\/g, '/'); // Normalize backslashes to forward slashes

    let image = new Images({
        category: req.body.category,
        city: req.body.city,
        propertyNo: req.body.propertyNo,
        img: {
            data: req.file.buffer, // Save the image buffer if needed
            contentType: req.file.mimetype // Save the image MIME type
        }
    });

    try {
        image = await image.save();
        res.status(201).redirect("/images");
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

/**************************************************************************************************/
// Updating image
router.put("/:id", upload.single('img'), async (req, res) => {
    let image = await Images.findById(req.params.id);
    if (!image) return res.status(404).send('The image with the given ID was not found');

    // Validate the image
    const { error } = handleImagesValidation(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).render('edit_image', { errors: errorMessages, image: req.body });
    }

    // Prepare the updated data
    const updatedData = {
        category: req.body.category,
        city: req.body.city,
        propertyNo: req.body.propertyNo,
    };

    if (req.file) {
        updatedData.img = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    // Update the image in the database
    image = await Images.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(image);
});

/**************************************************************************************************/
// Deleting image
router.delete("/:id", async (req, res) => {
    try {
        const image = await Images.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).send("The image is not available");
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send("An error occurred during deletion");
    }
});

module.exports = router;
