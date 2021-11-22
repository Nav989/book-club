// REGISTER SCHEMA

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("RegReader", {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        dob: DataTypes.STRING,
        email: {
            type: DataTypes.STRING
        },
        password: DataTypes.STRING,
        user_type: DataTypes.STRING,
    }, {
        timestamps: true,
        createdAt:false,
        updatedAt:false
    })

    return User;

}