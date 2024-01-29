module.exports = (sequelize, DataTypes) => {
  const studio = sequelize.define("Studio", {
    name: { type: DataTypes.STRING, allownull: false },
  });
  studio.associate = (models) => {
    studio.hasMany(models.StudioAnime, {
      onDelete: "cascade",
    });
  };
  return studio;
};
