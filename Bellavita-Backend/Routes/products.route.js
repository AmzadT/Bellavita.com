const express = require('express');
const productRouter = express.Router();
const productModel = require('../Models/products.model');
const authorized = require('../Middlewares/auth.middleware')
const checkAdmin = require('../Middlewares/checkAdmin.middleware');
const { default: mongoose } = require('mongoose');


// Get all Products with optional filtering
productRouter.get('/', authorized, async (req, res) => {
    // const userId = req.user._id;
    
    // Destructuring the query parameters
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

    // const skip = (page - 1) * limit;
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
        const products = await productModel.find(filter)
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



// Add new Product
productRouter.post('/create', [authorized, checkAdmin], async (req, res) => {
    const userId = req.user._id
    const { name, description, category, brand, price, imageUrl, ratings } = req.body;
    if (!name || !description || !category || !price || !imageUrl || !ratings) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newProduct = new productModel({
            name,
            description,
            category,
            brand,
            price,
            imageUrl,
            ratings,
            userId
        });
        await newProduct.save();
        res.status(201).json({ message: `Product Created Successfully ✅` });
    } catch (error) {
        console.log(`Error occurred while creating product: ${error}`);
        res.status(500).json({ message: `Server error occurred during product creation ❌ ${error.message}` });
    }
})



// Update Products
productRouter.patch('/update/:id', [authorized, checkAdmin], async (req, res) => {
    const userId = req.user._id;
    const payload = req.body;
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: `Invalid Product ID` });
    }

    if (Object.keys(payload).length === 0) {
        return res.status(400).json({ message: `At least one field to update is required` });
    }

    try {
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: `Product Not Found` });
        }

        if (product.userId.toString() === userId.toString()) {
            const updatedProduct = await productModel.findByIdAndUpdate(productId, payload, { new: true });
            res.status(200).json({ message: `Product Updated Successfully ✅`, updatedProduct });
        } else {
            return res.status(403).json({ message: `Unauthorized to update this product` });
        }
    } catch (error) {
        console.log(`Error occurred while updating product: ${error}`);
        res.status(500).json({ message: `Server error occurred during product update ❌ : ${error.message}` });
    }
});



// Delete Products
productRouter.delete('/delete/:id', [authorized, checkAdmin], async (req, res) => {
    const userId = req.user._id;
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: `Invalid Product ID` });
    }

    try {
        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: `Product Not Found` });
        }

        if (product.userId.toString() === userId.toString()) {
            await productModel.findByIdAndDelete(productId);
            res.status(200).json({ message: `Product Deleted Successfully ✅` });
        } else {
            return res.status(403).json({ message: `Unauthorized to delete this product` });
        }
    } catch (error) {
        console.log(`Error occurred while deleting product: ${error}`);
        res.status(500).json({ message: `Server error occurred during product deletion ❌ : ${error.message}` });
    }
});



module.exports = productRouter;
