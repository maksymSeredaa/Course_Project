import userService from '../db/user';  // Make sure the import path is correct based on your project structure

export default {
    // Controller to get all users
    async getUsers(req, res) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Failed to get users:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to get a single user by email
    async getUserByEmail(req, res) {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }
            const user = await userService.getUserByEmailAndPassword(email, password);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Failed to get user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Controller to create a new user
    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Failed to create user:', error);
            if (error.message === 'Email already exists') {
                res.status(409).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    },
};
