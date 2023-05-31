const postsService = require('../services/posts.service');

const postsController = {
    getAll: async(req, res) => { 
        try {
            const posts = await postsService.getAll();
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
        const post = await postsService.getById(id);
        res.status(200).json({
            "message": `get post by id ${id}`,
            "data": post
        });
    },
    
    create: async (req, res) => {
        const post = await postsService.create();
        res.status(201).json({
            "message": "post created",
            "data": post
        });
    },

    update: async (req, res) => {
        const { id } = req.params;
        const post = await postsService.update(id, req.body);
        res.status(200).json({
            "message": "post updated",
            "data": post
        });
    },

    delete: async (req, res) => {
        const { id } = req.params;
        await postsService.delete(id);
        res.status(200).json({
            "message": `post ${id} deleted`
        });
    },

};

module.exports = postsController;