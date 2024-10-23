const {Author, handleAuthorValidation} = require('../models/authors');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
//get all authors
router.get("/", async (req, res) => {
  const authors = await Author.find().sort("name");
  res.send(authors);
});
/**************************************************************************************************/
// get author by ID:
router.get("/:id", async (req, res) => {
  const authors = await Author.findById(req.params.id);
  if (!authors) {
    return res.status(404).send("the authors is not available");
  }
  res.send(authors);
});
/**************************************************************************************************/
//adding author:
router.post("/",async (req, res) => {
  const { error } = handleAuthorValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  try {
    let author = new Author({name: req.body.name});
    author= await author.save();
    res.status(201).send(author); // Send the created author object with status 201
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

/**************************************************************************************************/
//updating author:
router.put("/:id", async (req, res) => {
  // validate the author
  const { error } = handleAuthorValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }
  

  try {
   let author = await Author.findByIdAndUpdate(req.params.id, {name: req.body.name} , {new: true});
    if (!author) return res.status(404).send('the author with given id is not found');
    res.status(201).send(author); // Send the created author object with status 201
  } catch (error) {
    res.status(500).send('An error occurred');
  }
  
});
/**************************************************************************************************/
router.delete("/:id", async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);
  // If the author does not exist, return 404
  if (!author) {
    return res.status(404).send("The author is not available");
  }
  // Return the deleted author
  res.status(200).send(author);
});

module.exports = router;