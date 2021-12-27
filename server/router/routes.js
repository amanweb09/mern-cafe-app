const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/menu', productController().fetchProducts);
router.post('/cart-items', productController().cartItems);

module.exports = router;