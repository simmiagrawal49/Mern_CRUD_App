// Dependencies
import express from 'express';
import mongoose from 'mongoose';
const app = express();
//var router = express.Router();

// Product model
//let Product = require('../models/product.js');
import Product from '../models/product.js';


const router = express.Router();

 /* router.get('/',(req, res) =>
{
    res.send('This works!');
}); */

// Add Product
router.route('/create').post((req, res, next) => {
  Product.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Products
router.route('/').get((req, res) => {
    Product.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
router.route('/read/:id').get((req, res) => {
  Product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.route('/update/:id').put((req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
router.route('/delete/:id').delete((req, res, next) => {
  Product.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Return router
//module.exports = router;

export default router;