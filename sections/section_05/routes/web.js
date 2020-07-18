const express = require("express");

const router = express.Router();

// Index
router.get("/", (request, response, next) => {
    response.send("<h1>hello from express</h1>");
});

// Products
router.get("/add-product", (request, response, next) => {
    response.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
    `);
});

router.post("/product", (request, response) => {
    console.log(request.body);
    response.redirect("/");
});

module.exports = router;
