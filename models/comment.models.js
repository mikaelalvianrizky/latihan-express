module.exports = (sequelize, DataTypes) => {
    
    const Comment = sequelize.define("comment", {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING,
        }
    });

    return Comment;
}
