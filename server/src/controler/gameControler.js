// gameController.js
import gameService from '../db/game';  // Adjust the import path as necessary

export default {
    // Controller to fetch all games
    async getAllGames(req, res) {
        try {
            const games = await gameService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            console.error('Failed to retrieve games:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to get a game by ID
    async getGameById(req, res) {
        try {
            const { gameId } = req.params;
            const game = await gameService.getGameById(gameId);
            if (!game) {
                return res.status(404).json({ error: 'Game not found' });
            }
            res.status(200).json(game);
        } catch (error) {
            console.error('Failed to retrieve game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to create a new game
    async createGame(req, res) {
        try {
            console.log(req.body);
            const newGame = await gameService.createGame(req.body);
            res.status(201).json(newGame);
        } catch (error) {
            console.error('Failed to create game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to delete a game by ID
    async deleteGame(req, res) {
        try {
            const { gameId } = req.params;
            await gameService.deleteGame(gameId);
            res.status(200).json({ message: 'Game deleted successfully' });
        } catch (error) {
            console.error('Failed to delete game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
