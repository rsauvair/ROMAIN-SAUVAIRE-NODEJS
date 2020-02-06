const db = require('../models');

exports.createSock = async (req, res) => {
    try {
        let newSock = await db.Sock.create(req.body);
        console.log(newSock);
        return res.status(200).json({
            message: 'Nouvelle paire de chaussette créée avec succès !',
            newSock
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Impossible de créer ta chaussette!',
            error: err,
        });
    }
};

exports.getAllSocks = async (req, res) => {
    try {
        let socks = req.query
            ? await db.Sock.find(req.query)
            : await db.Sock.find();
        return res.status(200).json({
            socks
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Impossible de récupérer les chaussettes!',
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
