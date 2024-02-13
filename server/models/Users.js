module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allownull: false,
      get() {
        const rawvalue = this.getDataValue("name");
        return rawvalue ? rawvalue.toUpperCase() : null;
      },
    },
    emailid: { type: DataTypes.STRING, allownull: false, unique: true },
    password: { type: DataTypes.STRING, allownull: false },
    status: { type: DataTypes.INTEGER, defaultValue: 0, allownull: false },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Watchlist, {
      onDelete: "cascade",
    });
  };

  return Users;
};
