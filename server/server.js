const express = require("express");
const { Reviews, Products } = require("../db/db.js");
var cors = require("cors");
const path = require("path");
const app = express();
const compression = require("compression");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let port = 3004;

// Serve static client-side files
app.use(express.static("dist"));

// compressing filesx
app.use(compression());

app.get("/reviews", (req, res) => {
  // create variable to store product ID of requested reviews
  let product_id = req.query.product_id;

  // create new promise to await response from Mongo 'find' query
  return new Promise((resolve, reject) => {
    Reviews.find({ product_id: product_id }, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  }).then(val => {
    res.send(val);
  });
});

// Get product image
app.get("/products", (req, res) => {
  // create variable to store product ID of requested reviews
  // console.log("This is the request, query for products: " + req.query.product_id)
  let product_id = req.query.product_id;

  // Query mongoDB to find specific product's associated picture
  return new Promise((resolve, reject) => {
    Products.findOne({ listing_id: product_id }, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  }).then(val => {
    res.send(val);
  });
});

// adding additional reviews for this item to the database
app.post("/newReviews", function(req, res) {
  let newReviews = req.body.newReviews;
  let product_id = req.body.product_id;

  return new Promise((resolve, reject) => {
    Reviews.insertMany(newReviews, (err, result) => {
      if (err) {
        return reject(err);
      }
      console.log("Saved new reviews to database");
      return resolve(result);
    });
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        Reviews.find({ product_id: product_id }, (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    })
    .then(val => {
      res.send(val);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports.port = port;
