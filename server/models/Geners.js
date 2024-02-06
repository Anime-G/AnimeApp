module.exports = (sequelize, DataTypes) => {
    const Generes = sequelize.define("Generes", {
        title: { type: DataTypes.STRING, allownull: false,get(){
          const rawvalue=this.getDataValue('title');
          return rawvalue?rawvalue.toUpperCase():null;
        } },
  
    });
    Generes.associate = (models) => {
        Generes.hasMany(models.GeneresAnime, {
          onDelete: "cascade",
        });
      };
    return Generes;
  };