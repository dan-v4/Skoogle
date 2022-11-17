module.exports = (sequelize, DataTypes) => {
    
    const videos = sequelize.define("videos", {
        videos_name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return videos;
}