const User = require('../models/user.model');
const UserModel = new User();

// Create a new user.
exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await UserModel.createUser(userData);
        res.json({user});
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
};

// Retrieve user by sub claim (Auth0 user identifier).
exports.getUser = async (req, res) => {
    try {
        const { sub } = req.query;
        const user = await UserModel.getUserBySub(sub);
        res.json({user});
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
};

// Retrieve all links created by a user.
exports.getUserLinks = async (req, res) => {
    try {
        const { sub } = req.query;
        const links = await UserModel.getUserLinks(sub);
        res.json({ links });
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
};

// Update existing user data.
exports.updateUser = async (req, res) => {
    try {
        const { sub } = req.body;
        const userData = req.body;

        const user = await UserModel.updateUserBySub(sub, userData);
        res.json({user});
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
};
