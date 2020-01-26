module.exports = function(sequelize, DataTypes) {
    const Vital_stats = sequelize.define("Vital_Stats", {
        date_logged: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        weight_pounds: {
            type: DataTypes.SMALLINT
        },
        weight_ounces: {
            type: DataTypes.SMALLINT
        },
        weight_kilos: {
            type: DataTypes.DECIMAL
        },
        length_inches: {
            type: DataTypes.DECIMAL
        },
        length_cm: {
            type: DataTypes.DECIMAL
        },
        head_inches: {
            type: DataTypes.DECIMAL
        },
        head_cm: {
            type: DataTypes.DECIMAL
        },
    });

    Vital_stats.associate = function(models) {
        Vital_stats.belongsTo(models.Baby, {
            foreignKey: {
                allowNull: false,
            }
        });
    };

    return Vital_stats;
};