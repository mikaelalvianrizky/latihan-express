module.exports = (sequelize, DataTypes) => {

    const Prediction = sequelize.define("prediction", {
        curhat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prediksi: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Prediction;
}
