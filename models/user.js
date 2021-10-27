'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return { ...this.get(), id: undefined } 
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iniciativa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    agilidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blefe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    conhecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    forca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    furtividade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inteligencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    labia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manejo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preparacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    performace: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pontaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resistencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sobrevivencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    animais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vontade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};