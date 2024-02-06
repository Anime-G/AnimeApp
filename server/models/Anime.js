module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define("Anime", {
    title: { type: DataTypes.STRING, allownull: false },
    description: { type: DataTypes.STRING(1000), allownull: false, unique: true },
    pic: { type: DataTypes.STRING(500), allownull: false },
    status: { type: DataTypes.INTEGER, defaultValue: 0, allownull: false },
  });
  // Rated G: General audiences – All ages admitted.
  // Rated PG: Parental guidance suggested – Some material may not be suitable for [pre-teenagers (1972-1977)] / [children (1977-1984)].[23]
  // Rated R: Restricted – Under 17 requires accompanying parent or adult guardian.
  // Rated X: No one under 17 admitted.
  Anime.associate=(models)=>{
    Anime.hasMany(models.Episode,{
        onDelete:'cascade'
    }),
    Anime.hasMany(models.AuthorAnime,{
        onDelete:'cascade'
    }),
    Anime.hasMany(models.StudioAnime,{
        onDelete:'cascade'
    }),
    Anime.hasMany(models.GeneresAnime,{
        onDelete:'cascade'
    })
  }
  return Anime;
};
