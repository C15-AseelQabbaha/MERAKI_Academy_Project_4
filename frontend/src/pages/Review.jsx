import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Reviews = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [message, setMessage] = useState("");

  // 
  const colors = ["#f0e6ff", "#ffe6f2", "#e6fff2", "#fff5e6", "#e6f0ff"];

  useEffect(() => {
    // 
    setReviews([
      { _id: 1, user: { name: "Alice" }, rating: 5, comment: "Excellent product!" },
      { _id: 2, user: { name: "Bob" }, rating: 4, comment: "Very good, I like it" },
      { _id: 3, user: { name: "Charlie" }, rating: 3, comment: "It's okay." },
      { _id: 4, user: { name: "ساره" }, rating: 4, comment: "يجننن والنتيجه تظهر من اول اسبوع" }
    ]);
  }, [productId]);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      _id: Date.now(),
      user: { name: "You" },
      ...newReview
    };
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ rating: 5, comment: "" });
    setMessage("✅ Review added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <div className="mb-3">
        <Link to="/products" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>

      <h2 className="mb-4" style={{ color: "#4B0082" }}>Product Reviews</h2>

      {message && (
        <div className="alert alert-success text-center">{message}</div>
      )}

      {reviews.length === 0 && <p>No reviews yet.</p>}

      <div className="mb-4">
        {reviews.map((rev, index) => (
          <div
            key={rev._id}
            className="p-3 mb-3 rounded"
            style={{ backgroundColor: colors[index % colors.length], borderLeft: "5px solid #4B0082" }}
          >
            <h5 style={{ color: "#4B0082" }}>{rev.user.name}</h5>
            <p style={{ color: "#FF8C00", fontWeight: "bold" }}>
              {renderStars(rev.rating)}
            </p>
            <p style={{ color: "#333" }}>{rev.comment}</p>
          </div>
        ))}
      </div>

      <div className="card p-3" style={{ backgroundColor: "#ffe6f2" }}>
        <h4 style={{ color: "#C71585" }}>Add Your Review</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select
              className="form-control"
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
            >
              {[5,4,3,2,1].map(num => (
                <option key={num} value={num}>{renderStars(num)}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Comment</label>
            <textarea
              className="form-control"
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              required
              placeholder="Write your feedback..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;