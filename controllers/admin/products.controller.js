const Product = require("../../models/product.model");

exports.getProducts = async (req, res) => {
  const products = await Product.find();

  res.render("admin/products", { products: products });
};

exports.addProduct = async (req, res) => {
  try {
    const { img, name, price, salePrice, quantity, dis, isAvailable } =
      req.body;

    const newProduct = new Product({
      img,
      name,
      price,
      salePrice,
      quantity,
      dis,
      isAvailable,
    });

    await newProduct.save();

    res.redirect("admin/products");
  } catch (error) {
    console.log(error);
  }
};
