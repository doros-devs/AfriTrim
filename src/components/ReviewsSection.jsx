import React from "react";

const ReviewsSection = ({ reviews }) => {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-gold mb-6">Client Reviews</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-6 hover:scale-105 transition-transform transform"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center text-white font-bold">
                {review.client.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{review.client}</p>
                <p className="text-sm text-gray-400">Rating: {review.rating}/5</p>
              </div>
            </div>
            <p className="text-sm mt-3 text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
