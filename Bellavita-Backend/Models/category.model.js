const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true, unique: true, trim: true},
    description: {
        type: String,
        maxlength: [1000, 'Description cannot exceed 1000 characters']
      },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
},
    {
        timestamps: true,
        versionKey: false,
    }
)

const categoryModel = mongoose.model('Category', CategorySchema)

module.exports = categoryModel