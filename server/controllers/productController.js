const mongoose = require('mongoose');
const Menu = require('../models/menu');

const productController = () => {
    return {
        fetchProducts: async function (req, res) {
            try {
                const menu = await Menu.find();
                if (menu) {
                    res.status(200).json({ menu })
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ failureMessage: "Something went wrong!" })
            }
        },
        cartItems: async function (req, res) {
            const ids = JSON.parse(req.body.items);
        }
    }
}

module.exports = productController;