module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define("Author", {
    name: { type: DataTypes.STRING, allownull: false ,get(){
      const rawvalue=this.getDataValue('name');
      return rawvalue?rawvalue.toUpperCase() :null;
    } },

  });
  author.associate=(models)=>{
    
    author.hasMany(models.AuthorAnime,{
        onDelete:'cascade'
    })
    
  }
  return author;
};
