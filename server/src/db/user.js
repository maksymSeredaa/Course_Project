import User from '../models/user';  // Make sure the import path is correct based on your project structure
import  bcrypt from 'bcrypt';
export default {
    // Get all usersn
    getUsers() {
        return User.findAll();
    },

    // Get a user by email
    async  getUserByEmailAndPassword(email, password) {
        try {
            const user = await User.findOne({
                where: { email: email }
            });
    
            if (!user) {
                throw new Error('User not found');
            }
            console.log(password, user.password);
            const isPasswordValid = password === user.password ;
            
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }
    
            return user;
        } catch (error) {
            console.error('Error retrieving user by email and password:', error);
            throw error;
        }
    },

    // Create a new user
    async createUser(userData) {
        try {
            // Check if a user with the given email already exists
            const existingUser = await User.findOne({ where: { email: userData.email } });
            if (existingUser) {
                throw new Error('Email already exists');
            }

            // Create new user if email not found
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
};
