var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id/addToUser', controller.addToUser);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/:id/deleteFromUser/:modId', controller.deleteFromUser);

module.exports = router;