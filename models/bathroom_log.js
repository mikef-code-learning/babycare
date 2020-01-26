module.exports = function(sequelize, DataTypes) {
    const Bathroom_log = sequelize.define("Bathroom_log", {
        time_logged: {
            type: DataTypes.TIME,
        },
        number1: {
            type: DataTypes.BOOLEAN,
        },
        number2: {
            type: DataTypes.BOOLEAN,
        },
        notes: {
            type: DataTypes.TEXT
        },
    });

    Bathroom_log.associate = function(models) {
        Bathroom_log.belongsTo(models.Baby, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Bathroom_log;
};