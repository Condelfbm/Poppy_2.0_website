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
    forca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destreza: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constituicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inteligencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sabedoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acrobacia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arcanismo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atletismo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atuacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    labia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    furtividade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    historia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intimidacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intuicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    investigacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    animais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    medicina: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    natureza: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    percepcao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prestigitacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    religiao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sobrevivencia: {
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