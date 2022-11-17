const express = require('express')
const router = express.Router()
const {videos} = require('../models')


router.get('/', async (req, res) => {
    const videosList = await videos.findAll();
    res.json(videosList);
    // res.send("hello world");
});

router.post('/', async (req, res) => {
    const post = req.body;
    await videos.create(post); // await ensures data fully inserted
    res.json(post);
});

module.exports = router;