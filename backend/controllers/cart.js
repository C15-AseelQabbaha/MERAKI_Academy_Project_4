const Cart = require("../models/cartSchema");

const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId; 
    const { productId, quantity } = req.body;

    //  check cart exist or no
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // if no ----make new cart
      cart = new Cart({ user: userId, items: [] });
    }

    //product exist or no
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      // if yes--- add the quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      //if product not exist --adding
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports={addToCart}