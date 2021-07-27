const express = require("express");
const customerRouter = express.Router();

const customerValidate = require("../validation/customerValidation");
const CustomerMongoos = require("../model/customer.model");

//1. show all data
customerRouter.get("/", async (req, res) => {
   await CustomerMongoos.find()
    .then(customerMongooss =>{res.json(customerMongooss)
    console.log(customerMongooss);})
    .catch(err => res.status(400).json('Error: ' + err));
});

//2. post (insert data)
customerRouter.post("/", async (req, res) => {
    const { error } = customerValidate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    if (error) return res.status(400).json(error.details[0]);
    const customerMongooss = new CustomerMongoos({
        username: req.body.username,
        email: req.body.email,
        password : req.body.password ,
        isPurchased:req.body.isPurchased
    });

    await customerMongooss.save()
    .then(customerMongooss=>{res.json("Data Inserted Successfully");})
    .catch(err => res.status(400).json('Error: ' + err));
});

//3. (put) update by id
customerRouter.put("/:id", async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).json('not valid id');
    const { error } = customerValidate(req.body);
    // if (error) return res.status(400).json(error.details[0].message);
    if (error) return res.status(400).json(error.details[0]);
    await CustomerMongoos.findByIdAndUpdate(req.params.id,{
        username: req.body.username,
        email: req.body.email,
        password : req.body.password ,
        isPurchased:req.body.isPurchased
    },{ new:true})
    .then(customerMongooss=>{
        if(!customerMongooss) return res.status(400).json("id not found");
        res.json("Data Updated Successfully");
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

//4. delete by id
customerRouter.delete("/:id", async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).send('not valid id');
    await CustomerMongoos.findByIdAndRemove(req.params.id)
    .then(customerMongooss => {
        if(!customerMongooss) return res.status(400).json("id not found");
        res.json("Data Deleted Successfully");
    })
    .catch(err => res.status(400).json("Error" + err));
});

//5. find by id
customerRouter.get("/:id", async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return res.status(400).json('not valid id');
    await CustomerMongoos.findById(req.params.id)
    .then(customerMongooss=>{
    if(!customerMongooss) return res.status(400).json("id not found");
    res.json(customerMongooss);
    console.log(customerMongooss);
    })
    .catch(err => res.status(400).json("Error" + err));
});
module.exports = customerRouter;
