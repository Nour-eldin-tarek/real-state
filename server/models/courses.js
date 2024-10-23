const Joi = require("joi");
const mongoose = require("mongoose");
// const {authorSchema} = require("./authors");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 225,
  },
  desc: {
    type: String,
    required: true,
    minlength: 15,
  },
  tags: {
    type: [String],
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "a course must have at least one tag",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  // author: {
  //     type: authorSchema,
  //     required:true
  // },
  courseCover: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);
/**************************************************************************************************/
function handleCourseValidation(course) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    desc: Joi.string().min(15).required(),
    tags: Joi.array().items(Joi.string()).min(1).required(),
    price: Joi.number().required(),
    isPublished: Joi.boolean().required(),
    authorId: Joi.objectId().required(),
  });
  return schema.validate(course, { abortEarly: false });
}


exports.Course = Course;
exports.handleCourseValidation = handleCourseValidation;
