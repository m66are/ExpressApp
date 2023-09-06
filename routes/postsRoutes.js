const express = require('express');
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
    res.send("Hello from posts")
})
postsRouter.get("/:id", (req, res) => {

    res.send("Hello fro single post with id")
})


module.exports = postsRouter;


