module.exports = (sequelize, DataTypes) => {
  const studio = sequelize.define("Studio", {
    name: { type: DataTypes.STRING, allownull: false,
       get() {
      const rawvalue = this.getDataValue("name");
      return rawvalue ? rawvalue.toUpperCase() : null;
    },},
  });
  studio.associate = (models) => {
    studio.hasMany(models.StudioAnime, {
      onDelete: "cascade",
    });
  };
  return studio;
};
