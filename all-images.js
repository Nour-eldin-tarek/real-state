const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://noureldindeveloper:zjHLZzciiuTnB93c@cluster0.s8icx.mongodb.net/Images?retryWrites=true&w=majority&appName=Cluster0"
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

// creating images:
const allImages = new mongoose.Schema({
    category: String,
    img: {
        data: Buffer,
        contentType: String
    },
});
const Images = mongoose.model("Images", allImages);

//-----------------------------------------------------------------------

// creating propertyCard into database:
const fs = require("fs");
const path = require("path"); // To resolve file paths

async function createImages() {
    // Path to your local property image
    const imagePath = path.join("E:\\Coding\\DEPI Project\\real-state\\real-state\\Designe\\assets\\Images\\city4.jpg");

    // Read the images from local storage and convert them to Buffers
    const propertyImgData = fs.readFileSync(imagePath);

    // Create a new property object with both images
    const imagesObject = new Images({
        category: "Cites",
        img: {
            data: propertyImgData,        // Store the property image binary data
            contentType: "image/jpg"     // Set the MIME type
        },
    });

    // Save the property with both images
    const images = await imagesObject.save();
    console.log("Property saved with images:", images);
}
// Call the function to create and save the property with the image
// createImages();

// ---------------------------------------------------------------------------------