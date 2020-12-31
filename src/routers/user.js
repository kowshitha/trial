const express = require("express");

// const {create,update} = require('../model/user');

const router = express.Router();

const User = require(`../model/user`);

router.post('/' , async(req,res)=>{

    console.log('users route');

    const newUser = new User(req.body);

    try {
         await newUser.save();
         res.status(201).send(newUser);
     } catch (err) {
         res.status(500).send();
     }
});
module.exports = router;