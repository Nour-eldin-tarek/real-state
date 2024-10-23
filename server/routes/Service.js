const { Service, validateService } = require('../models/Service'); // Adjust the path as necessary
const upload = require('./image_uploader');
const express = require("express");
const router = express.Router();

// Render add service form
router.get("/new", (req, res) => {
    res.render("add_service", { errors: [], service: {} });
});

// Render edit service form
router.get("/:id/edit", async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).send("Service not found");
        }
        res.render("edit_service", { errors: [], service });
    } catch (err) {
        res.status(500).send("An error occurred while fetching the service");
    }
});

// Get all services
router.get("/", async (req, res) => {
    try {
        const services = await Service.find().sort("description");
        res.render("services", { services });
    } catch (err) {
        res.status(500).send("An error occurred while fetching services");
    }
});

// Get service by ID
router.get("/:id", async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).send("The service is not available");
        }
        res.render("view_service", { service });
    } catch (err) {
        res.status(500).send("An error occurred while fetching the service");
    }
});

// Adding service
router.post("/", upload.single('img'), async (req, res) => {
    const { error } = validateService(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).render('add_service', { errors: errorMessages, service: req.body });
    }

    if (!req.file) {
        return res.status(400).send('Service image is required.');
    }

    const serviceImgPath = req.file.path.replace(/\\/g, '/'); // Normalize backslashes to forward slashes

    let service = new Service({
        description: req.body.description,
        img: {
            path: serviceImgPath, // Save the image path
            contentType: req.file.mimetype, // Save the image MIME type
        },
    });

    try {
        service = await service.save();
        res.status(201).redirect("/services");
    } catch (error) {
        res.status(500).send('An error occurred while saving the service.');
    }
});

// Updating service
router.put("/:id", upload.single('img'), async (req, res) => {
    let service = await Service.findById(req.params.id);
    if (!service) return res.status(404).send('The service with the given ID was not found.');

    const { error } = validateService(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).render('edit_service', { errors: errorMessages, service: req.body });
    }

    // Prepare the updated data
    const updatedData = {
        description: req.body.description,
    };

    if (req.file) {
        updatedData.img = {
            path: req.file.path.replace(/\\/g, '/'), // Save the updated image path
            contentType: req.file.mimetype,
        };
    }

    // Update the service in the database
    try {
        service = await Service.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.status(200).send(service);
    } catch (error) {
        res.status(500).send("An error occurred while updating the service.");
    }
});

// Deleting service
router.delete("/:id", async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).send("The service is not available.");
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send("An error occurred during deletion.");
    }
});

module.exports = router;
