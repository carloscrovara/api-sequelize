'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usados.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usados',
  });
  return usados;
};