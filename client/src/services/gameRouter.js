import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.6:5050/api';

// Get all games
export const getAllGames = async () => {
    try {
        const response = await axios.get('/games/all');
        return response.data;
    } catch (error) {
        console.log('GET ALL GAMES ERROR');
        console.error(error);
    }
};

// Get a game by ID
export const getGameById = async (gameId) => {
    try {
        const response = await axios.get(`/games/${gameId}`);
        return response.data;
    } catch (error) {
        console.log('GET GAME BY ID ERROR');
        console.error(error);
    }
};

// Create a new game
export const createGame = async (gameData) => {
    console.log(gameData);
    try {
        const response = await axios.post('/games/new', gameData);
        return response.data;
    } catch (error) {
        console.log('CREATE GAME ERROR');
        console.error(error);
        throw error;
    }
};

// Delete a game by ID
export const deleteGame = async (gameId) => {
    try {
        const response = await axios.delete(`/games/${gameId}`);
        return response.data;
    } catch (error) {
        console.log('DELETE GAME ERROR');
        console.error(error);
        throw error;
    }
};
