import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define collection and schema
let ProductSchema = new Schema({
   name: {
      type: String
   },
   color: {
      type: String
   },
   description: {
      type: String
   },
   category: {
      type: String
   },
   additional_info: {
      type: String
   }
}, {
   collection: 'products'
})

//module.exports = mongoose.model('Product', Product)

var Product = mongoose.model('Product', ProductSchema);
//i forgot above then it was not using any db query
//Product.find not a function

export default Product;
