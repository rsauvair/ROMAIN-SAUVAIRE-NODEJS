const express = require('express');
const router = express.Router();
const handlersSocks = require('../handlers/socks');

router.route('/')
    .post(handlersSocks.createSock)
    .get(handlersSocks.getAllSocks);

router.route('/:id')
    .get(handlersSocks.getOneSock)
    .put(handlersSocks.updateOneSock)
    .delete(handlersSocks.deleteOneSock);

module.exports = router;
