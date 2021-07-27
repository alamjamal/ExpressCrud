const express = require("express");
const courseRouter = express.Router();

const courseValidate = require("../validation/courseValidation");
const CourseMongoos = require("../model/course.model");

//show all value
courseRouter.get("/", async (req, res) => {
    const customerMongooss = await CourseMongoos.find()
    .sort({"tags":-1})
    .limit(3)
    .select({name:1, tags:1})
    .then(customerMongooss =>{res.json(customerMongooss);
    // console.log(customerMongooss);
    console.log(`${req.method} ${req.originalUrl}`);})
    .catch(err => res.status(400).json('Error: ' + err));
});

//insert
courseRouter.post("/", async (req, res) => {
    const { error } = courseValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const CourseMongooss = new CourseMongoos({
        name: req.body.name,
        price: req.body.price,
        tags : req.body.tags ,
    });

    CourseMongooss = await CourseMongooss.save();

    res.send(CourseMongooss);
    console.log(CourseMongooss);
});

//update by id
courseRouter.put("/:id", async (req, res) => {
    const { error } = courseValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const CourseMongooss = await CourseMongoos.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        },{ new:true});

    if (!CourseMongooss)
        return res
            .status(404)
            .send("The CourseMongoos with the given ID was not found.");

    res.send(CourseMongooss);
});

//delete by id
courseRouter.delete("/:id", async (req, res) => {

    const CourseMongooss = await CourseMongoos.findByIdAndRemove(req.params.id);

    if (!CourseMongooss)
        return res
            .status(404)
            .send("The CourseMongoos with the given ID was not found.");

    res.send(CourseMongooss);
});

//find by id
courseRouter.get("/:id", async (req, res) => {
    const CourseMongooss = await CourseMongoos.findById(req.params.id);
    if (!CourseMongooss)
        return res
            .status(404)
            .send("The CourseMongoos with the given ID was not found.");
    res.send(CourseMongooss);
});
module.exports = courseRouter;
