const express = require('express');
const userRouter = express.Router();


userRouter.get("/", (req, res) => {
    res.send("All users")
})
userRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Single user ${id}`);
})

module.exports = userRouter;