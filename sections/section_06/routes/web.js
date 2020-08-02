const path = require("path");
const express = require("express");
const router = express.Router();

const rootDirectory = require("../utilities/path");

const products = [];

// Index
router.get("/", (request, response, next) => {
    response.render("./shop/index", {
        products,
        title: "Shop | Index",
        uri: "/",
    });
});

// Products
router
    .route("/admin/products")
    .get((request, response, next) => {})
    .post((request, response) => {
        products.push({ title: request.body.title });
        response.redirect("/");
    });
router.get("/admin/products/create", (request, response, next) => {
    response.render("./products/create", {
        title: "Shop | Create Product",
        uri: "/admin/products/create",
    });
});

// Error Routes
router.use((request, response, next) => {
    response.status(404).render("./error_pages/404", { title: "Shop | 404" });
});

exports.routes = router;
exports.products = products;
