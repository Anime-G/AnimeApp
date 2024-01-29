module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define("Author", {
    name: { type: DataTypes.STRING, allownull: false },

  });
  author.associate=(models)=>{
    
    author.hasMany(models.AuthorAnime,{
        onDelete:'cascade'
    })
    
  }
  return author;
};
