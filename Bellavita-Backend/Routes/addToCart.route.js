const express = require('express');
const productRouter = express.Router();
const addToCartModel = require('../Models/addToCart.model')
const authorized = require('../Middlewares/auth.middleware')


// Get all Products with optional filtering
productRouter.get('/cart', authorized, async (req, res) => {

    const {
        page = 1,
        limit = 10,
        name,
        category,
        brand,
        minPrice,
        maxPrice,
        sortBy = 'createdAt',
        order = 'desc'
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const filter = {};

    if (name) filter.name = { $regex: name, $options: 'i' };
    if (category) filter.category = { $regex: category, $options: 'i' };
    if (brand) filter.brand = { $regex: brand, $options: 'i' };
    if (minPrice) filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };

    let sortCriteria = {};

    if (sortBy === 'name') {
        sortCriteria.name = order === 'asc' ? 1 : -1;
    } else if (sortBy === 'price') {
        sortCriteria.price = order === 'asc' ? 1 : -1;
    } else {
        sortCriteria.createdAt = order === 'desc' ? -1 : 1;
    }

    try {
        const products = await addToCartModel.find(filter)
            .skip(skip)
            .limit(parseInt(limit))
            .sort(sortCriteria);

        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'No Products Found' });
        }
    } catch (error) {
        console.log(`Error occurred while fetching products: ${error}`);
        res.status(500).json({ message: `Error while fetching products ❌ : ${error.message}` });
    }
});
