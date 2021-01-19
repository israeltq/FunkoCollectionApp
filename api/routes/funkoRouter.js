const express = require("express");

const FunkoController = require("../controllers/funkoController");

function routes() {
    const funkoRouter = express.Router();
    const controller = new FunkoController();                                   //creates a controller object with funkoModel as input

    funkoRouter.route("/funko").get(controller.getFunkos);                      // get all funkos
    funkoRouter.route("/funko/:funkoId").get(controller.getFunkoById);          // get specific funko by id
    funkoRouter.route("/funko").post(controller.createFunko);                   // create a funko
    funkoRouter.route("/funko/:funkoId").patch(controller.updateFunko);         // update funko by id
    funkoRouter.route("/funko/:funkoId").delete(controller.deleteFunko);        // delete a funko by id 

    return funkoRouter;
}

module.exports = routes;
