const Joi = require("joi");
const mongoose = require("mongoose");

// Author schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    profileImg: {
        data: Buffer,
        contentType: String
    }
});

// Property schema
const propertySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 225,
    },
    location: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    author: {
        type: authorSchema,
        required: true
    },
    BedsNo: {
        type: Number,
        required: true,
        min: 1,
    },
    BathsNo: {
        type: Number,
        required: true,
        min: 1,
    },
    sqFt: {
        type: Number,
        required: true,
        min: 100,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    img: {
        data: Buffer,
        contentType: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false,  // Removed 'required: true'
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Property model
const Property = mongoose.model("Property", propertySchema);

// Joi validation schema for property creation
function validateProperty(property) {
    const schema = Joi.object({
        category: Joi.string().min(3).required(),
        name: Joi.string().min(5).required(),
        location: Joi.string().min(5).required(),
        BedsNo: Joi.number().min(1).required(),
        BathsNo: Joi.number().min(1).required(),
        sqFt: Joi.number().min(100).required(),
        price: Joi.number().min(0).required(),
        isPublished: Joi.boolean().required(),
        authorId: Joi.objectId().required(),  // Assuming the author will have an ID reference
    });
    return schema.validate(property, { abortEarly: false });
}

exports.Property = Property;
exports.validateProperty = validateProperty;
