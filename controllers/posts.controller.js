const db = require('../models');

const Post = db.Post;

const postsController = {
    getAll: async(req, res) => { 
        try {
            const posts = await Post.findAll();
            res.status(200).json({
                "message": "get all posts",
                "data": posts
            });
        } catch (err) {
            console.log(err);
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        const post = await Post.findOne({ where: { id: id } });
        res.status(200).json({
            "message": `get post by id ${id}`,
            "data": post
        });
    },
    
    create: async (req, res) => {
        const post = await Post.create({
            title: req.body.title,
            author: req.body.author,
            subject: req.body.subject,
            
        });
        res.status(201).json({
            "message": "post created",
            "data": post
        });
    },

    update: async (req, res) => {
        const { id } = req.params;
        await Post.update(req.body, { where: { id: id } });
        const post = await Post.findOne({ where: { id: id } });
        res.status(200).json({
            "message": "post updated",
            "data": post
        });
    },

    delete: async (req, res) => {
        const { id } = req.params;
        await Post.destroy({ where: { id: id } });
        res.status(200).json({
            "message": `post ${id} deleted`
        });
    },

};

module.exports = postsController;