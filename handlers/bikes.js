const db = require('../models');

exports.createBike = async (req, res) => {
    try {
        let newBike = await db.Bike.create(req.body);
        console.log(newBike);
        return res.status(200).json({
            message: 'Nouveau vélo créé avec succès!',
            newBike: newBike
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Impossible de créer ce vélo!',
            error: err,
        });
    }
};

exports.getAllBikes = async (req, res) => {
    try {
        let bikes;
        if (req.query.brand) {
            bikes = await db.Bike
                .find({brand: req.query.brand})
                .sort({releaseDate: 1})
                .select({name: 1, brand: 1, releaseDate: 1});
        } else if (req.query.isElectric) {
            bikes = await db.Bike.find({isElectric: true});
        } else {
            bikes = await db.Bike.find();
        }

        return res.status(200).json({
            bikes: bikes
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Impossible de récupérer les vélos!',
            error: err,
        });
    }
};

exports.getOneBike = async (req, res) => {
    try {
        let thisBike = await db.Bike.findById(req.params.id);
        return res.status(200).json(thisBike);
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not find this specific bike',
            err,
        })
    }
};

exports.updateOneBike = async (req, res) => {
    try {
        let bikeToUpdate = await db.Bike.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        return res.status(200).json({
            message: 'Youpi, vélo bien modifié',
            bikeToUpdate: bikeToUpdate,
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not update this specific bike',
            err,
        })
    }
};

exports.deleteOneBike = async (req, res) => {
    try {
        await db.Bike.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: 'Youpi, vélo bien supprimé'
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not delete this specific bike',
            err,
        })
    }
};
