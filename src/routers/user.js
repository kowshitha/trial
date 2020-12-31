const { request } = require("express");
const express = require("express");

// const {create,update} = require('../model/user');

const router = express.Router();

const User = require(`../model/User`);

router.post('/' , async(req,res)=>{

    console.log('users route');

    const newUser = new User(req.body);
    console.log(req.body);
    router.get('/', async (req, res) => {
        try {
            const users = await User.find({});
            res.send(users);
        } catch (error) {
            res.status(404).send({ error: 'Path not found' });
        }
    });
    
    router.get('/:id', async (req, res) => {
        const _id = req.params.id;
        try {
            const user = await User.findById(_id);
            if (!user) {
                return res.status(404).send({ error: 'User not found' });
            }
            res.send(user);
        } catch (error) {
            res.status(500).send({ error: 'Internal server error' });
        }
    });
    

    try {
         await newUser.save();
         res.status(201).send(newUser);
     } catch (err) {
         res.status(500).send();
     }
});
router.get('/', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		res.status(404).send({ error: 'Path not found' });
	}
});
module.exports = router;