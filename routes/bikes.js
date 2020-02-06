const express = require('express');
const router = express.Router();
const handlersSocks = require('../handlers/bikes');

router.route('/')
    .post(handlersSocks.createBike)
    .get(handlersSocks.getAllBikes);

router.route('/:id')
    .get(handlersSocks.getOneBike)
    .put(handlersSocks.updateOneSock)
    .delete(handlersSocks.deleteOneSock);

module.exports = router;
