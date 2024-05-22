import duelGameService from '../db/doubleGame';  // Adjust the import path as necessary

export default {
    // Controller to fetch all duel games
    async getAllDuelGames(req, res) {
        try {
            const games = await duelGameService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            console.error('Failed to retrieve duel games:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to get a duel game by ID
    async getDuelGameById(req, res) {
        try {
            const { id } = req.params;
            const game = await duelGameService.getGameById(id);
            if (!game) {
                return res.status(404).json({ error: 'Duel game not found' });
            }
            res.status(200).json(game);
        } catch (error) {
            console.error('Failed to retrieve duel game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to create a new duel game
    async createDuelGame(req, res) {
        try {
            const newGame = await duelGameService.createGame(req.body);
            res.status(201).json(newGame);
        } catch (error) {
            console.error('Failed to create duel game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
