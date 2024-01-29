module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define("Types", {
    title: { type: DataTypes.STRING, allownull: false },
  });
  // Movie,Series,Special
  Types.associate = (models) => {
    Types.hasMany(models.Anime, {   
      onDelete: "cascade",
    });
  };
  return Types;
};
