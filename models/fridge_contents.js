"use strict";

module.exports = function(sequelize, Sequelize) {
    var fridges = sequelize.define("fridge_contents", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fridge_id: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        ingredient_id:{
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        servings_count: {
            type:Sequelize.FLOAT,
            defaultValue:0.0
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });

    fridges.sync();

    return fridges;
};
