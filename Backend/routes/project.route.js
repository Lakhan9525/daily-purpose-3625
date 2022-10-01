const express = require("express");
const userDataRouter = express.Router();
const projectdataRoute = require("../schema/project.schema");

userDataRouter.get("/", async (req, res) => {
    let user = await projectdataRoute.find().populate("cred", {
        password: 0, data: 0, __v: 0
    })
    res.send(user)
})

userDataRouter.get("/:id", async (req, res) => {
    try {
        let user1 = await projectdataRoute.find({ cred: { _id: req.params.id } })
        if (user1.length < 1) {
            let user2 = await projectdataRoute.find({ _id: req.params.id })
            res.send(user2);
        } else {
            res.send(user1);
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
})

userDataRouter.post("/", async (req, res) => {
    try {
        let user = await projectdataRoute.create(req.body)
        res.send(user);
        console.log();
    } catch (e) {
        res.send(e.message)
    }
})

userDataRouter.delete("/:id", async (req, res) => {
    try {
        let user1 = await projectdataRoute.find({ cred: { _id: req.params.id } })
        if (user1.length >= 1) {
            let userD = await projectdataRoute.deleteMany({ cred: { _id: req.params.id } })
            res.send(userD);
        } else {
            let user = await projectdataRoute.deleteOne({ _id: req.params.id })
            res.send(user);
        }

    } catch (e) {
        res.status(401).send(e.message)
    }
})

userDataRouter.patch("/:id", async (req, res) => {
    try {
        let user = await projectdataRoute.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
        res.send(user)
    } catch (e) {
        res.status(401).send(e.message);
        console.log("something");
    }
})

module.exports = userDataRouter