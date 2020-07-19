const path = require("path");
const express = require("express");
const router = express.Router();

const rootDirectory = require("../utilities/path");

// Index
router.get("/", (request, response, next) => {
    response.sendFile(
        path.join(rootDirectory, "resources", "views", "index.html")
    );
});

// Products
router
    .route("/admin/products")
    .get((request, response, next) => {})
    .post((request, response) => {
        console.log(request.body);
        response.redirect("/");
    });
router.get("/admin/products/create", (request, response, next) => {
    response.sendFile(
        path.join(
            rootDirectory,
            "resources",
            "views",
            "products",
            "create.html"
        )
    );
});

// Error Routes
router.use((request, response, next) => {
    response
        .status(404)
        .sendFile(
            path.join(
                rootDirectory,
                "resources",
                "views",
                "error_pages",
                "404.html"
            )
        );
});

module.exports = router;
