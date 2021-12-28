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
            try {
                const items = await Menu.find({ _id: { $in: ids } })
                if (items) {
                    return res.status(200).json({items})
                }
            } catch {
                err => {
                    console.log(err);
                    return res.status(500).json({err: "Something went wrong!"})
                }
            }
        }
    }
}

module.exports = productController;