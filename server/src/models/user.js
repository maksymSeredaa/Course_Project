// user.js
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: 'User', timestamps: false, tableName: 'Users' }
);

export default User;
