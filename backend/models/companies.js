module.exports = (sequelize, DataTypes) => {
    
    const companies = sequelize.define("companies", {
        companies_name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return companies;
}