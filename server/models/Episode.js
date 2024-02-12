module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define("Episode", {
        title: { type: DataTypes.STRING, allownull: false },
        url: { type: DataTypes.STRING(1000), allownull: false },
      Epno: { type: DataTypes.STRING, allownull: false},
    });
    
// Rated G: General audiences – All ages admitted.
// Rated PG: Parental guidance suggested – Some material may not be suitable for [pre-teenagers (1972-1977)] / [children (1977-1984)].[23]
// Rated R: Restricted – Under 17 requires accompanying parent or adult guardian.
// Rated X: No one under 17 admitted.
    return Episode;
  };