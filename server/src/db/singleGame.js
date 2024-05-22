import SinglePlayerGame from '../models/singleGame';  // Adjust the import path as necessary

export default {
    // Fetch all single player games
    getAllGames() {
        return SinglePlayerGame.findAll();
    },

    // Get a single player game by ID
    async getGameById(userId) {
        try {
            const game = await SinglePlayerGame.findAll({ where: { user_id: userId } });
            return game;
        } catch (error) {
            console.error('Error retrieving game by user ID:', error);
            throw error;
        }
    },

    // Create a new single player game
    async createGame(gameData) {
        try {
            const newGame = await SinglePlayerGame.create(gameData);
            return newGame;
        } catch (error) {
            console.error('Error creating game:', error);
            throw error;
        }
    }
};
