const express = require('express');
const { Course } = require('../../models/courses');
const router = express.Router();

/**************************************************************************************************/
/*
  this API for connecting the client project so it will return json 
  not like the courses at this path:  \routes\courses.js  it returns html (ejs)

*/
// Get all courses (API route for client-side JSON requests)
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch courses from MongoDB
    res.status(200).json(courses);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});
/**************************************************************************************************/
// Get course by ID (API route for fetching a single course by its ID)
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id); // Fetch course by ID from MongoDB
    if (!course) {
      return res.status(404).json({ error: 'Course not found' }); // Handle course not found
    }
    res.status(200).json(course);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});
module.exports = router;
