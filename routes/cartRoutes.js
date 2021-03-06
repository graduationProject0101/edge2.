const express = require('express');
const router = express.Router();

const cartController = require('./../controllers/cartController');

router.route('/')
.get(cartController.getCart)
.post(cartController.createCartItem)
.delete(cartController.deleteCartItem);

router.route('/qty').get(cartController.getQuantity);



module.exports = router;