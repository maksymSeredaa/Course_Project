import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import User from './user';

class DuelGame extends Model {}

DuelGame.init({
    game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    player1_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    player2_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    winner_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    player1_score: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    player2_score: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    game_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'DuelGame',
    tableName: 'DuelGames',
    timestamps: false
});

DuelGame.belongsTo(User, { foreignKey: 'player1_id', as: 'Player1' });
DuelGame.belongsTo(User, { foreignKey: 'player2_id', as: 'Player2' });
DuelGame.belongsTo(User, { foreignKey: 'winner_id', as: 'Winner' });

export default DuelGame;
