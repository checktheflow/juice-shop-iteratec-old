/* jslint node: true */
'use strict'

module.exports = function (sequelize, DataTypes) {
  var Challenge = sequelize.define('Challenge', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.INTEGER,
    country: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    solved: DataTypes.BOOLEAN
  })
  return Challenge
}
