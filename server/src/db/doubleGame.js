import DuelGame from '../models/doubleGame';  // Adjust the import path as necessary

export default {
    // Fetch all duel games
    getAllGames() {
        return DuelGame.findAll();
    },

    // Get a duel game by ID
    async getGameById(gameId) {
        try {
            const game = await DuelGame.findByPk(gameId);
            return game;
        } catch (error) {
            console.error('Error retrieving duel game by ID:', error);
            throw error;
        }
    },

    // Create a new duel game
    async createGame(gameData) {
        try {
            const newGame = await DuelGame.create(gameData);
            return newGame;
        } catch (error) {
            console.error('Error creating duel game:', error);
            throw error;
        }
    }
};
