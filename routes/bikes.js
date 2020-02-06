const express = require('express');
const router = express.Router();
const handlersSocks = require('../handlers/bikes');

router.route('/')
    .post(handlersSocks.createBike)
    .get(handlersSocks.getAllBikes);

router.route('/:id')
    .get(handlersSocks.getOneSock)
    .put(handlersSocks.updateOneSock)
    .delete(handlersSocks.deleteOneSock);

module.exports = router;
