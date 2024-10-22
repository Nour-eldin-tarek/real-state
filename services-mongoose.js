const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://noureldindeveloper:zjHLZzciiuTnB93c@cluster0.s8icx.mongodb.net/Services?retryWrites=true&w=majority&appName=Cluster0"
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

// creating services:
const services = new mongoose.Schema({
    description: String,
    img: {
        data: Buffer,
        contentType: String
    },
});
const Service = mongoose.model("Service", services);

//-----------------------------------------------------------------------

// creating propertyCard into database:
const fs = require("fs");
const path = require("path"); // To resolve file paths

async function createServices() {
    // Path to your local property image
    const imagePath = path.join("E:\\Coding\\DEPI Project\\real-state\\real-state\\Designe\\assets\\Images\\service6.jpg");

    // Read the images from local storage and convert them to Buffers
    const imgData = fs.readFileSync(imagePath);

    // Create a new property object with both images
    const serviceObject = new Service({
        description: "You Can Buy The Piano Teacher's Home from Groundhog Day",
        img: {
            data: imgData,        // Store the property image binary data
            contentType: "image/jpg"     // Set the MIME type
        },
    });

    // Save the property with both images
    const service = await serviceObject.save();
    console.log("Property saved", service);
}
// Call the function to create and save the property with the image
// createServices();

// ---------------------------------------------------------------------------------