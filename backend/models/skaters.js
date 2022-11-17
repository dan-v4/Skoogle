module.exports = (sequelize, DataTypes) => {
    
    const skaters = sequelize.define("skaters", {
        skaters_fname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        skaters_lname:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    return skaters;
}