const Joi = require("joi");
const mongoose = require("mongoose");

// Images schema
const imagesSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    city: {
        type: String,
        // required: true,
        minlength: 2,
        maxlength: 100,
    },
    propertyNo: {
        type: String,
        // required: true,
        minlength: 1,
        maxlength: 100,
    },
    img: {
        data: Buffer,
        contentType: String,
        required: true,
    }
});

// Images model
const Images = mongoose.model("Images", imagesSchema);

// Joi validation for Images
function validateImages(images) {
    const schema = Joi.object({
        category: Joi.string().min(3).max(100).required(),
        city: Joi.string().min(2).max(100).required(),
        propertyNo: Joi.string().min(1).max(100).required(),
        imgPath: Joi.string().required(),  // Path to the image file
    });
    return schema.validate(images, { abortEarly: false });
}

exports.Images = Images;
exports.validateImages = validateImages;
