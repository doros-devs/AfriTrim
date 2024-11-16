import React, { useState } from "react";

const PaymentForm = ({ phone, onPayment }) => {
  const [amount, setAmount] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    onPayment({ amount, phone });
  };

  return (
    <form onSubmit={handlePayment} className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
      <h2 className="text-2xl text-center font-bold text-white mb-4">Make Payment</h2>

      {/* Amount Input */}
      <div>
        <label className="block text-white">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter payment amount"
        />
      </div>

      {/* Payment Button */}
      <button
        type="submit"
        className="w-full bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        Pay Now
      </button>

      {/* Instructions */}
      <div className="text-sm text-center text-gray-400">
        <p>Once payment is completed, you'll receive a confirmation. Thank you!</p>
      </div>
    </form>
  );
};

export default PaymentForm;
