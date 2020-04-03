module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    }
  }, {
    timestamps:true,
    paranoid: true});
  Team.associate = function(models) {
    // associations can be defined here
    Team.belongsToMany(models.User,{
      through :'member',
      foreignKey:'team_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })



    Team.belongsTo(models.User,{
      foreignKey:'owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  };
  return Team;
};