const express = require('express')
const router = express.Router()
const {companies} = require('../models')


router.get('/', async (req, res) => {
    const companiesList = await companies.findAll();
    res.json(companiesList);
    // res.send("hello world");
});

router.post('/', async (req, res) => {
    const post = req.body;
    await companies.create(post); // await ensures data fully inserted
    res.json(post);
});

module.exports = router;