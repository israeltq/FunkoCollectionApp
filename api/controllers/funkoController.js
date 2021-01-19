const logger = require("tracer").console();

const Funko = require("../models/funko");

class FunkoController {

    async getFunkos(req, res) {
        try {
            const query = {};
            const funkos = await Funko.find(query);

            return res.status(200).send(funkos);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async getFunkoById(req, res) {
        try {
            const funko = await Funko.findById(req.params.funkoId);
            if (funko == null) {
                return res.sendStatus(404);
            }

            return res.status(200).send(funko);
        } 
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async createFunko(req, res) {
        const {
            name,
            description,
            category,
            franchise,
            retailPrice,
            actualValue,
            exclusive,
            exclusivity, 
            discontinued,
        } = req.body;

        if (name == null) {
            return res.status(400).send("Name of the Funko is required");
        } 
        
        if (category == null) {
            return res.status(400).send("Category of the Funko is required");
        }
        
        if (franchise == null) {
            return res.status(400).send("Franchise of the Funko is required");
        }

        if (retailPrice == null) {
            return res.status(400).send("Retail Price of the Funko is required");
        }

        if (actualValue == null) {
            return res.status(400).send("ActualValue on resale-market is required");
        }

        try {
            const newFunko = {
                name,
                description,
                category,
                franchise,
                retailPrice,
                actualValue,
                exclusive,
                exclusivity, 
                discontinued,
            };

            const funko = new Funko(newFunko);
            await funko.save();

            return res.status(201).send(funko);
        }
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }
    
    async updateFunko(req, res) {
        const newName = req.body.name;
        const newDescription = req.body.description;
        const newActualValue = req.body.actualValue;
        const newDiscontinued = req.body.discontinued;

        try {
            const funko = await Funko.findById(req.params.funkoId);
            if (funko == null) {
                return res.sendStatus(404);
            }
            
            funko.name = newName ? newName : funko.name;
            funko.description = newDescription ? newDescription : funko.description;
            funko.actualValue = newActualValue ? newActualValue : funko.actualValue;
            funko.discontinued = newDiscontinued ? newDiscontinued : funko.discontinued;
            await funko.save();

            return res.status(202).send(funko);
        } 
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    async deleteFunko(req, res) {
        try {
            const funko = await Funko.findById(req.params.funkoId);
            if (funko == null) {
                return res.sendStatus(404);
            }
            
            await funko.remove();

            return res.status(204).send(funko);
        } 
        catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }
}

module.exports = FunkoController;
