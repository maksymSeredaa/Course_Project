// gameService.js
import Game from '../models/game.js';  // Make sure the import path is correct based on your project structure

export default {
    // Create a new game
    async createGame(gameData) {
        console.log(gameData + "jfkjjk");
        try {
            // Check if a game with the given gameId already exists
            // const existingGame = await Game.findOne({ where: { gameId: gameData.gameId } });
            // if (existingGame) {
            //     throw new Error('Game ID already exists');
            // }

            // Create new game if gameId not found
            const newGame = await Game.create(gameData);
            return newGame;
        } catch (error) {
            console.error('Error creating game:', error);
            throw error;
        }
    },

    // Delete a game by gameId
    async deleteGame(gameId) {
        try {
            const game = await Game.findOne({ where: { gameId: gameId } });
            if (!game) {
                throw new Error('Game not found');
            }

            await game.destroy();
            return { message: 'Game deleted successfully' };
        } catch (error) {
            console.error('Error deleting game:', error);
            throw error;
        }
    },

    // Get a game by gameId
    async getGameById(gameId) {
        try {
            const game = await Game.findOne({ where: { gameId: gameId } });
            if (!game) {
                throw new Error('Game not found');
            }

            return game;
        } catch (error) {
            console.error('Error retrieving game by ID:', error);
            throw error;
        }
    },
};
