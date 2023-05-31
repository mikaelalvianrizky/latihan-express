const db = require('../models');

const Comment = db.Comment;

const commentController = {
    getAllByPostId: async (req, res) => {
        try {
            const { post_id } = req.params;
            const comments = await Comment.findAll({where: {post_id: post_id}});
            res.status(200).json({
                "message": `get all comments by post ${post_id}`,
                "data": comments
            });
        } catch (err) {
            console.log(err);
        }
    },

    createComment: async (req, res) => {
        const { post_id } = req.params;
        const comment = await Comment.create({
            post_id: post_id,
            author: req.body.author,
            subject: req.body.subject,
        });
        res.status(201).json({
            "message": "comment created",
            "data": comment
        });
    },

};

module.exports = commentController;