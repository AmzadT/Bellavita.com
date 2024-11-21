const mongoose = require('mongoose');

// Define the addToCart schema
const addToCartSchema = new mongoose.Schema({
productName: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters long'],
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },

  description: {
    type: String,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },

  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be a positive number']
  },

  categoryId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true 
  },

  brand: {
    type: String,
    trim: true,
    maxlength: [50, 'Brand name cannot exceed 50 characters'],
  },

  imageUrl: {
    type: [String],
    required: [true, 'Image URL is required'],
    match: [/^(https?:\/\/[^\s]+)$/, 'Each image URL must be a valid URL'],
  },

  ratings: {
    type: Number,
    min: [1, "Rating should be b/w 1-5"],
    max: [5, "Rating should be b/w 1-5"],
    default: 1
  },

  reviews: {
    type: Number,
    default: 1,
    min: [1, 'Reviews count cannot be negative']
  },

  maxPrice: {
    type: Number,
  },

  reviewImg: {
    type: String,
    match: [/^(https?:\/\/[^\s]+)$/, 'Review image URL must be a valid URL'],
  },

  ratingImg: {
    type: String,
    match: [/^(https?:\/\/[^\s]+)$/, 'Rating image URL must be a valid URL'],
  },

  stockStatus: {
    type: Boolean,
    default: true,
  },

  stock: {
    type: Number,
    default: 10
  },

  prodIncrement: {
    type: Number,
    default:1,
  },
 
}, {
  timestamps: true, 
  versionKey: false,
});

const addToCartModel = mongoose.model('addToCart', addToCartSchema);

module.exports = addToCartModel;
