const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    const post = new Post({ content: req.body.content });
    await post.save();
    res.status(201).json(post);
});

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

module.exports = router;
