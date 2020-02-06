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
        let bikes = await db.Bike.find();
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

exports.getOneSock = async (req, res) => {
    try {
        let thisSock = await db.Sock.findById(req.params.id);
        return res.status(200).json(thisSock);
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not find this specific sock',
            err,
        })
    }
};

exports.updateOneSock = async (req, res) => {
    try {
        let sockToUpdate = await db.Sock.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        return res.status(200).json({
            message: 'Youpi, chaussette bien modifiée',
            sockToUpdate,
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not update this specific sock',
            err,
        })
    }
};

exports.deleteOneSock = async (req, res) => {
    try {
        await db.Sock.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: 'Youpi, chaussette bien deleted'
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oops could not delete this specific sock',
            err,
        })
    }
};
