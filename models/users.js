module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pword: DataTypes.STRING,
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middle_name: DataTypes.STRING,
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_type: {
            type: DataTypes.ENUM('Mother', 'Father', 'Guardian', 'Other'),
            allowNull: false,
        },
        unit_type: {
            type: DataTypes.ENUM('Imperial (USA)', 'Metric'),
            allowNull: false,
        },
    })

    User.associate = function(models) {
        User.hasMany(models.Baby, {
            onDelete: "cascade"
        });
    };

    return User ;
};