import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.6:5050/api';

export const getUser = async () => {
    try {
        const response = await axios.get('/user/all');
        return response.data;
    } catch (error) {
        console.log('GET ALL USER ERROR');
        console.error(error);
    }
};

export const userLogin = async data => {
    try {
        console.log(data)
        const response = await axios.post('/user/login', data);
        return response.data;
    } catch (error) {
        if (error.response?.status === 404 && error.response?.data?.error === 'User not found') {
            alert('Нема такого користувача');
        } else {
            console.log('GET USER ERROR');
            console.error(error);
        }
        throw error;
    }
};

export const addUser = async user => {
    try {
        console.log(user)
        const response = await axios.post('/user/new', user);
        return response.data;
    } catch (error) {
        if (error.response?.status === 409 && error.response?.data?.error === 'Email already exists') {
            alert('Емейл вже зайнятий');
        } else {
            console.log('ADD USER ERROR');
            console.error(error);
        }
        throw error;
    }
};

export const getUserById = async userId => {
    try {
        const response = await axios.get(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.log('GET USER BY ID ERROR');
        console.error(error);
    }
};


