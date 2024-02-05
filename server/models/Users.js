module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      name: { type: DataTypes.STRING, allownull: false ,
      get(){
        const rawvalue=this.getDataValue('name');
        return rawvalue?rawvalue.toUpperCase():null;
      }},
      emailid: { type: DataTypes.STRING, allownull: false,unique:true },
      password:{type:DataTypes.STRING,allownull:false},
      status:{type:DataTypes.INTEGER,defaultValue:0,allownull:false}
    });
// Rated G: General audiences – All ages admitted.
// Rated PG: Parental guidance suggested – Some material may not be suitable for [pre-teenagers (1972-1977)] / [children (1977-1984)].[23]
// Rated R: Restricted – Under 17 requires accompanying parent or adult guardian.
// Rated X: No one under 17 admitted.
    return Users;
  };