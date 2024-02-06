module.exports = (sequelize, DataTypes) => {
  const Userpics = sequelize.define("Userpic", {
    name: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
      get() {
        const rawvalue = this.getDataValue("name");
        return rawvalue ? rawvalue.toUpperCase() : null;
      },
    },
    pic: { type: DataTypes.STRING, allownull: false },
  });

  return Userpics;
};
