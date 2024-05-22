import singleGameService from '../db/singleGame';  // Adjust the import path as necessary

export default {
    // Controller to fetch all single player games
    async getAllSingleGames(req, res) {
        try {
            const games = await singleGameService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            console.error('Failed to retrieve single player games:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to get a single player game by ID
    async getSingleGameById(req, res) {
        try {
            const { id } = req.params;
            const game = await singleGameService.getGameById(id);
            if (!game) {
                return res.status(404).json({ error: 'Single player game not found' });
            }
            res.status(200).json(game);
        } catch (error) {
            console.error('Failed to retrieve single game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to create a new single player game
    async createSingleGame(req, res) {
        try {
            const newGame = await singleGameService.createGame(req.body);
            res.status(201).json(newGame);
        } catch (error) {
            console.error('Failed to create single game:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
