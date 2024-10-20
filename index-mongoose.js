const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://noureldindeveloper:zjHLZzciiuTnB93c@cluster0.s8icx.mongodb.net/property?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`your server listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("Could not connect to Mongoose", error);
    });

// creating course schema:
const propertyCard = new mongoose.Schema({
    category: String,
    name: String,
    location: String,
    author: String,
    date: { type: Date, default: Date.now },
    // isPublished: Boolean,
    BedsNo: Number,
    BathsNo: Number,
    sqFt: Number,
    price: Number,
    img: {
        data: Buffer,
        contentType: String
    },
    athorImg: {
        data: Buffer,
        contentType: String
    }
});
const Property = mongoose.model("Property", propertyCard);

//-----------------------------------------------------------------------

// creating course into database:
const fs = require("fs");
const path = require("path"); // To resolve file paths

async function createProperty() {
    // Path to your local property image
    const propertyImagePath = path.join("E:\\Coding\\DEPI Project\\real-state\\real-state\\Designe\\assets\\Images\\Other\\World-Furniture-Online_77.jpg");
    
    // Path to your local author image
    const authorImagePath = path.join("E:\\Coding\\DEPI Project\\real-state\\real-state\\Designe\\assets\\Images\\Other\\unnamed.png");

    // Read the images from local storage and convert them to Buffers
    const propertyImgData = fs.readFileSync(propertyImagePath);
    const authorImgData = fs.readFileSync(authorImagePath);

    // Create a new property object with both images
    const propertyObject = new Property({
        category: "Apartment",
        name: "Luxury Family Home",
        location: "1421 San Pedro St. Los Angeles, CA 900015",
        author: "Ali Tufan",
        BedsNo: 3,
        BathsNo: 2,
        sqFt: 3280,
        price: 13000,
        img: {
            data: propertyImgData,        // Store the property image binary data
            contentType: "image/jpeg"     // Set the MIME type
        },
        authorImg: {
            data: authorImgData,         // Store the author image binary data
            contentType: "image/jpeg"    // Set the MIME type for author image
        }
    });

    // Save the property with both images
    const property = await propertyObject.save();
    // console.log("Property saved with images:", property);
}

// Call the function to create and save the property with the image
// createProperty();
