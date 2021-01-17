const express = require("express");

const UserController = require("../controllers/userController");

function routes() {
    const userRouter = express.Router();
    const controller = new UserController();                            //creates a controller object with UserModel as input

    userRouter.route("/user").get(controller.getUsers);                 // get all users
    userRouter.route("/user/:userId").get(controller.getUserById);      // get specific user by id
    userRouter.route("/user").post(controller.createUser);              // create a user
    userRouter.route("/user/:userId").patch(controller.updateUser);     // update user by id
    userRouter.route("/user/:userId").delete(controller.deleteUser);    // delete a user by id 

    return userRouter;
}

module.exports = routes;
