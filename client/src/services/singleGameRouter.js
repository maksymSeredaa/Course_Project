import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.6:5050/api';

export const getAllSingleGames = async () => {
    try {
        const response = await axios.get('/singleGame/singles');
        return response.data;
    } catch (error) {
        console.log('GET ALL SINGLE GAMES ERROR');
        console.error(error);
    }
};

export const getSingleGameById = async (id) => {
    try {
        const response = await axios.get(`/singleGame/singles/${id}`);
        return response.data;
    } catch (error) {
        console.log('GET SINGLE GAME BY ID ERROR');
        console.error(error);
    }
};

export const createSingleGame = async (gameData) => {
    try {
        const response = await axios.post('/singleGame/singles', gameData);
        return response.data;
    } catch (error) {
        console.log('CREATE SINGLE GAME ERROR');
        console.error(error);
        throw error;
    }
};
