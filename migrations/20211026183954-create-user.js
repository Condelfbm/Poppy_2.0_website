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