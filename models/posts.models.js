module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATEONLY,
        },
        subject: {
            type: DataTypes.STRING,
        }
    });

    return Post;
}
