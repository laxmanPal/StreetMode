const Product = require("../../models/product.model");
const Wishlist = require("../../models/wishlist.model");

exports.getWishlist = async (req, res) => {
  try {
    if (!req.session.userId && !req.session) {
      return res.render("web/cart", { wishlists: [] });
    }

    const wishlists = await Wishlist.find({
      userId: req.session.userId,
    }).populate("productId");

    res.render("web/wishlist", { wishlists: wishlists });
  } catch (error) {
    console.log(error);
  }
};

exports.addToWishlist = async (req, res) => {
  const productId = req.body.productId;
  const userId = req.session.userId;

  try {
    const newWish = await new Wishlist({
      userId: userId,
      productId: productId,
    });

    await newWish.save();
    res.send("Product Added To Wishlist").json();
  } catch (error) {
    console.log(error);
  }

  // res.render("web/cart");
};

exports.removeWishlist = async (req, res) => {
  const wishListId = req.body.wishListId;

  try {
    const rmWishlist = await Wishlist.findByIdAndDelete(wishListId);

    res.redirect("/wishlist");
    // res.send(rmWishlist);
  } catch (error) {
    console.log(error);
  }
};
