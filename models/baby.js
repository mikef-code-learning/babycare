module.exports = function(sequelize, DataTypes) {
    const Baby = sequelize.define("Baby", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        ssn: {
            type: DataTypes.SMALLINT,
        },
    });

    Baby.associate = function(models) {
        Baby.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Baby;
};