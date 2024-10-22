const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://noureldindeveloper:zjHLZzciiuTnB93c@cluster0.s8icx.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
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

// Define Blog schema
const blogSchema = new mongoose.Schema({
    category: String,
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    img: {
        data: Buffer,
        contentType: String
    }
});
const Blog = mongoose.model("Blog", blogSchema);

// Define BlogDetails schema
const blogDetailsSchema = new mongoose.Schema({
    // category: String,
    // title: String,
    date: { type: Date, default: Date.now },
    description1: String,
    subTitle: String,
    description2: String,
    img: {
        data: Buffer,
        contentType: String
    },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" }  // Foreign key to Blog
});
const BlogDetails = mongoose.model("BlogDetails", blogDetailsSchema);

// Import required modules
const fs = require("fs");
const path = require("path"); // To resolve file paths

// Function to create a blog and its details
async function createBlog() {
    const imagePath = path.join("E:\\Coding\\DEPI Project\\real-state\\real-state\\Designe\\assets\\Images\\blog-image.jpg");
    const imgData = fs.readFileSync(imagePath);

    // Create a new Blog object
    const blogObject = new Blog({
        category: "construction",
        title: "Redfin Ranks the Most Competitive Neighborhoods of 2022",
        description: "Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol",
        img: {
            data: imgData,
            contentType: "image/jpg"
        }
    });

    // Save the blog entry
    const blog = await blogObject.save();
    console.log("Blog saved", blog);

    // Create a corresponding BlogDetails object
    const blogDetailsObject = new BlogDetails({
        // category: "Business",
        // title: "Redfin Ranks The Most Competitive Neighborhoods of 2020",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum reiciendis assumenda harum natus incidunt dicta, alias nisi fugiat, explicabo quam, fugit ea quos iste sequi quas. Sapiente, veniam magnam? Lorem ipsum dolor sit amet co",
        subTitle: "Housing Markets That Changed The Most This Decade",
        description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa dolores quasi reiciendis reprehenderit? Fugiat adipisci labore nulla. Possimus expedita veniam dolores, omnis accusamus maxime quia ipsum enim nulla voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti quia ullam cum autem eum hic esse qui. Asperiores, ab. Sint provident voluptatibus unde quam pariatur nihil, rerum distinctio dolorem!",
        date: new Date(),
        img: {
            data: imgData,
            contentType: "image/jpg"
        },
        blog: blog._id   // Link to the saved blog using its ID
    });

    // Save blog details
    const blogDetails = await blogDetailsObject.save();
    console.log("Blog details saved", blogDetails);
}

// Call the function to create and save the blog with its details
// createBlog();