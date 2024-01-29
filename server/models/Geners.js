module.exports = (sequelize, DataTypes) => {
    const Generes = sequelize.define("Generes", {
        title: { type: DataTypes.STRING, allownull: false },
  
    });
    Generes.associate = (models) => {
        Generes.hasMany(models.GeneresAnime, {
          onDelete: "cascade",
        });
      };
    return Generes;
  };