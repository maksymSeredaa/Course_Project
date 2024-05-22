import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import User from './user';

class SinglePlayerGame extends Model {}

SinglePlayerGame.init({
    game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    game_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'SinglePlayerGame',
    tableName: 'SinglePlayerGames',
    timestamps: false
});

SinglePlayerGame.belongsTo(User, { foreignKey: 'user_id' });

export default SinglePlayerGame;
