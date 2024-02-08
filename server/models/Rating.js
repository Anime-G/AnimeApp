module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define("Rates", {
    title: { type: DataTypes.STRING, allownull: false },
    Description: { type: DataTypes.STRING, allownull: false },
  });
  // Rated G: General audiences – All ages admitted.
  // Rated PG: Parental guidance suggested – Some material may not be suitable for [pre-teenagers (1972-1977)] / [children (1977-1984)].[23]
  // Rated R: Restricted – Under 17 requires accompanying parent or adult guardian.
  // Rated X: No one under 17 admitted.
  Rate.associate = (models) => {
    Rate.hasMany(models.Anime, {
      onDelete: "cascade",
    });
   
  };

  return Rate;
};
