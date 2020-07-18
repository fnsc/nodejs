const express = require("express");

const router = express.Router();

// Index
router.get("/", (request, response, next) => {
    response.send("<h1>hello from express</h1>");
});

// Products
router
    .route("/admin/products")
    .get((request, response, next) => {
        response.send(`
            <form action="/admin/products" method="POST">
                <input type="text" name="title">
                <button type="submit">Add Product</button>
            </form>
        `);
    })
    .post((request, response) => {
        console.log(request.body);
        response.redirect("/");
    });

module.exports = router;
