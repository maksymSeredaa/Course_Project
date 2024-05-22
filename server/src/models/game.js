// game.js
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

class Game extends Model {}

Game.init(
  {
    gameId: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    gameName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    secretPassword: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Game', timestamps: false, tableName: 'Game' }
);

export default Game;
