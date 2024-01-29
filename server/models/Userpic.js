module.exports = (sequelize, DataTypes) => {
    const Userpics = sequelize.define("Userpic", {
      title: { type: DataTypes.STRING, allownull: false,unique:true  },
      pic: { type: DataTypes.STRING,allownull: false},
    
    });

    return Userpics;
  };