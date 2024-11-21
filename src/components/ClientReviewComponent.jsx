// ReviewComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setReviewText,
  setRating,
  setFormValidity,
  setIsSubmitted,
  resetReviewState,
} from "../redux/clientSlices/reviewSlice";

const ReviewComponent = ({ onSubmitReview }) => {
  const dispatch = useDispatch();

  // Select the state from the Redux store
  const { reviewText, rating, isFormValid, isSubmitted } = useSelector(
    (state) => state.review
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (reviewText.trim() === "" || rating === 0) {
      dispatch(setFormValidity(false)); // Show validation error if fields are empty
    } else {
      onSubmitReview({ reviewText, rating });
      dispatch(setReviewText("")); // Reset review text
      dispatch(setRating(0)); // Reset rating
      dispatch(setFormValidity(true)); // Set form valid
      dispatch(setIsSubmitted(true)); // Set submission status to true
    }
  };

  useEffect(() => {
    // Reset form state when submission is successful
    if (isSubmitted) {
      setTimeout(() => {
        dispatch(resetReviewState());
      }, 3000); // Reset after 3 seconds
    }
  }, [isSubmitted, dispatch]);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-blackGray rounded-lg shadow-lg"
    >
      {isSubmitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          Review submitted successfully!
        </div>
      ) : (
        <>
          <div>
            <label className="block text-lg font-semibold text-lightgold">
              Review:
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => dispatch(setReviewText(e.target.value))}
              className="w-full p-4 rounded-lg text-black bg-lightGray border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Write your review here..."
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-lightgold">
              Rating:
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => dispatch(setRating(star))}
                  className={`text-3xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-400"
                  } hover:text-yellow-500 transition duration-200`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {!isFormValid && (
            <p className="text-red-500 text-sm">
              Please provide both a review and a rating before submitting.
            </p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-lightgold text-black font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
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
