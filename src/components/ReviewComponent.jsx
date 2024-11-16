import React, { useState } from "react";

const ReviewComponent = ({ onSubmitReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [isFormValid, setIsFormValid] = useState(true); // Form validation state
  const [isSubmitted, setIsSubmitted] = useState(false); // State for tracking submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === "" || rating === 0) {
      setIsFormValid(false); // Show validation error if fields are empty
    } else {
      onSubmitReview({ reviewText, rating });
      setReviewText("");
      setRating(0);
      setIsFormValid(true);
      setIsSubmitted(true); // Set submission status to true
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-800 rounded-lg shadow-lg">
      {isSubmitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          Review submitted successfully!
        </div>
      ) : (
        <>
          <div>
            <label className="block text-lg font-semibold text-white">Review:</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-4 rounded-lg text-black bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Write your review here..."
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-white">Rating:</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${rating >= star ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-500 transition duration-200`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {!isFormValid && (
            <p className="text-red-500 text-sm">Please provide both a review and a rating before submitting.</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            >
              Submit Review
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ReviewComponent;
