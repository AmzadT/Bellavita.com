const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  // category: {
  //   type: String,
  //   required: true,
  //   enum: ['Cosmetics', 'Skincare', 'Luxury Perfumes', 'Bath Body', 'Body Deos', 'Gift Sets'],
  // },

  category: {
    type: [String], 
    required: true,
  },

  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  brand: {
    type: String,
  },
  stock: {
    type: Number,
    min: 0,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 5,
  },
  userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
 
}, {
  timestamps: true, 
  versionKey: false,
});

// Virtual for calculating average rating
// productSchema.virtual('averageRating').get(function() {
//   if (this.reviews.length === 0) return 0;
//   const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
//   return sum / this.reviews.length;
// });

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
