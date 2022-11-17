const express = require('express')
const router = express.Router()
const {skaters} = require('../models')


router.get('/', async (req, res) => {
    const skatersList = await skaters.findAll();
    res.json(skatersList);
    // res.send("hello world");
});

router.post('/', async (req, res) => {
    const post = req.body;
    await skaters.create(post); // await ensures data fully inserted
    res.json(post);
});

module.exports = router;