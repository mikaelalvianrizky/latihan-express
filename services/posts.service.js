const db = require('../models');

const Post = db.Post;

const postsService = {
    getAll: async () => {
        try {
            return await Post.findAll();
        } catch (err) {
            console.log(err);
        }
    },

    getById: async (id) => {
        const post = await Post.findOne({ where: { id: id } });
        return post;
    },

    create: async (data) => {
        const post = await Post.create({
            title: data.title,
            author: data.author,
            subject: data.subject,
        });
        return post;
    },

    update: async (id, data) => {
        await Post.update(data, { where: { id: id } });
        const post = await Post.findOne({ where: { id: id } });
        return post;
    },

    delete: async (id) => {
        await Post.destroy({ where: { id: id } });
        return id;
    },

};

module.exports = postsService;