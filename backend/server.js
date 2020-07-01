import express from "express";
import data from "./data";

const app = express();

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const num = Number(productId);
  const product = data.products.find((x) => x._id === num);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product not found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
