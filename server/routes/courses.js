const {Course, handleCourseValidation} = require('../models/courses');
const {Author} = require('../models/authors');
const auth = require('../middleware/auth')
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add course form
router.get("/new",async (req, res) => {
  const authors = await Author.find(); // Fetch all authors
  // Pass authors to the template along with an empty course object
  res.render("add_course", { errors: [], course: {}, authors: authors });
});

router.get("/:id/edit", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const authors = await Author.find(); // Fetch all authors
    if (!course) {
      return res.status(404).send("Course not found");
    }
    // Pass the course data and authors to the edit form
    res.render("edit_course", { errors: [], course: course, authors: authors });
  } catch (err) {
    res.status(500).send("An error occurred while fetching course or authors");
  }
});

/**************************************************************************************************/
// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().sort("name");
  res.render("courses", { courses }); // render the courses html (ejs)
});

/**************************************************************************************************/
// Get course by ID
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).send("the course is not available");
  }
  // res.send(course);
  res.render("view_course", { course });
});

/**************************************************************************************************/
// Adding course
router.post("/", auth, upload.single('courseCover'), async (req, res) => {
  // Convert tags from a comma-separated string into an array
  if (req.body.tags) {
    req.body.tags = req.body.tags.split(',').map(tag => tag.trim());
  }

  const { error } = handleCourseValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    const authors = await Author.find();
    return res.status(400).render('add_course', { errors: errorMessages, course: req.body, authors: authors });
  }

  const author = await Author.findById(req.body.authorId);
  if (!author) return res.status(400).send('Invalid author');

  if (!req.file) {
    res.status(400).send('course cover is required..');
  }

  const courseCoverPath = req.file.path.replace(/\\/g, '/'); // Normalize backslashes to forward slashes

  let course = new Course({
    name: req.body.name,
    desc: req.body.desc,
    tags: req.body.tags,
    price: req.body.price,
    isPublished: req.body.isPublished,
    author: {
      _id: author._id,
      name: author.name
    },
    courseCover: courseCoverPath,
  });

  try {
    course = await course.save();
    res.status(201).redirect("/courses");
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

/**************************************************************************************************/
// Updating course
router.put("/:id", upload.single('courseCover'), async (req, res) => {
  // Convert tags from a comma-separated string into an array
  if (req.body.tags) {
    req.body.tags = req.body.tags.split(',').map(tag => tag.trim());
  }

  // Validate the course
  const { error } = handleCourseValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    // return res.status(400).send(errorMessages);
    return res.status(400).render('edit_course', { errors: errorMessages, course: req.body, authors: authors });
  }

  const author = await Author.findById(req.body.authorId);
  if (!author) return res.status(400).send('Invalid author');

  let course = await Course.findById(req.params.id);
  if (!course) return res.status(404).send('The course with the given ID was not found');

  // Prepare the updated data
  const updatedData = {
    name: req.body.name,
    desc: req.body.desc,
    tags: req.body.tags, // Now it's an array
    price: req.body.price,
    isPublished: req.body.isPublished, // Make sure this is included
    author: {
      _id: author._id,
      name: author.name
    }
  };

  if (req.file) {
    req.body.courseCover = req.file.path.replace(/\\/g, '/');
    updatedData.courseCover = req.file.path;
  }

  // Update the course in the database
  course = await Course.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(course);
});

/**************************************************************************************************/
// Deleting course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send("The course is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});
 
module.exports = router;
