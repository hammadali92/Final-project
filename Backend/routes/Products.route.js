// const express = require("express");
// const router = express.Router();
// const controller = require("../controller/unstitchedP.controller")


// router.post("/",controller.store)
// // router.get("/",controller.index)

// module.exports = router;


const express = require('express');
const router = express.Router();
const Product = require("../models/Products.model") // Import the correct model
const ProductData = require('../data/ProductData');

router.post('/', async (req, res) => {
  try {
    // Insert the JSON data into the MongoDB collection using the UnstitchedP model
    await Product.insertMany(ProductData);
    res.status(201).send('Data inserted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error inserting data: ${error.message}`);
  }
});

// router.get('/', async (req, res) => {
//     try {
//       const data = await Product.find();
//       res.status(200).json(data); // Sending data as JSON response
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(`Error retrieving data: ${error.message}`);
//     }
//   });
router.get('/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.find({ category: category });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error retrieving data: ${error.message}`);
  }
});

  

module.exports = router;


