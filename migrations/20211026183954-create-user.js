'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  }
};