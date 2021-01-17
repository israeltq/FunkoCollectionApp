const logger = require("tracer").console();

const User = require("../models/user");

class UserController {

    async getUsers(req, res) {
        try {
            const query = {};
            const users = await User.find(query);

            return res.status(200).send(users);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.userId);
            if (user == null) {
                return res.sendStatus(404);
            }

            return res.status(200).send(user);
        } 
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async createUser(req, res) {
        const {
            userName,
            email,
            firstName,
            lastName,
            birthday,
            funkoCollection
        } = req.body;

        if (userName == null) {
            return res.status(400).send("Username is required");
        } 
        
        if (email == null) {
            return res.status(400).send("Email is required");
        }
        
        if (firstName == null) {
            return res.status(400).send("First name is required");
        }

        if (lastName == null) {
            return res.status(400).send("Last name is required");
        }

        if (birthday == null) {
            return res.status(400).send("Birthday is required");
        }

        try {
            const newUser = {
                userName,
                email,
                firstName,
                lastName,
                birthday
            };
            newUser.birthday = new Date(birthday);
            newUser.funkoCollection = funkoCollection ? funkoCollection : [];
            newUser.wishList = [];

            const user = new User(newUser);
            await user.save();

            return res.status(201).send(user);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async updateUser(req, res) {
        const newCollection = req.body.funkoCollection;
        const newWishList = req.body.wishList;

        try {
            const user = await User.findById(req.params.userId);
            if (user == null) {
                return res.sendStatus(404);
            }
            
            user.funkoCollection = newCollection ? newCollection : user.funkoCollection;
            user.wishList = newWishList ? newWishList : user.wishList;
            await user.save();
            
            return res.status(202).send(user);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await User.findById(req.params.userId);
            if (user == null) {
                return res.sendStatus(404);
            }

            await user.remove();
            
            return res.status(204).send(user);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

}

module.exports = UserController;
