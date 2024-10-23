const Joi = require("joi");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  date: { type: Date, default: Date.now },
});


/**************************************************************************************************/
authorSchema.pre('findOneAndUpdate', async function(next) {
    const updatedAuthor = this.getUpdate();
    if (updatedAuthor && updatedAuthor.name) {
      // Update the courses that reference this author
      await mongoose.model('Course').updateMany(
        { 'author._id': this._conditions._id }, // Find courses that reference this author
        { $set: { 'author.name': updatedAuthor.name } } // Update the author name in those courses
      );
    }
    next();
  });

  const Author = mongoose.model("Author", authorSchema);
/**************************************************************************************************/
function handleAuthorValidation(author) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
  });
  return schema.validate(author, { abortEarly: false });
}


exports.authorSchema = authorSchema;
exports.Author = Author;
exports.handleAuthorValidation = handleAuthorValidation;
