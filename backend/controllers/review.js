const reviewModel = require("../models/reviewSchema");

// Create review
const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const newReview = new reviewModel({
      userId: req.user.userId,
      productId: productId,
      rating,
      comment,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ message: "error creating review", error: err.message });
  }
};

//  Get reviews for a product
const getReviewForProduct = async (req, res) => {
  try {
    const review = await reviewModel
      .find({ productId: req.params.productId })
      .populate("userId", "name")
      .populate("productId", "name");

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: "error fetching review", error: err.message });
  }
};

// ❌ Delete review (only owner or admin)
const deleteReview = async (req, res) => {
  try {
    const review = await reviewModel.findById(req.params.id);

    if (!review) {
      return res.status(404).json("Review not found");
    }

    if (review.userId.toString() !== req.user.userId && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized to delete this review" });
    }

    await reviewModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: "error deleting review", error: err.message });
  }
};

module.exports = { createReview, getReviewForProduct, deleteReview };