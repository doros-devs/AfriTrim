import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmount,
  setPhone,
  setPaymentStatus,
  setPaymentResult,
  resetPaymentState,
} from "../redux/clientSlices/paymentSlice";

const PaymentForm = ({ phone, onPayment }) => {
  const dispatch = useDispatch();
  const paymentStatus = useSelector((state) => state.payment.paymentStatus);
  const amount = useSelector((state) => state.payment.amount);
  const [localAmount, setLocalAmount] = useState(amount);

  // Sync the local amount state with Redux
  useEffect(() => {
    if (amount) {
      setLocalAmount(amount);
    }
  }, [amount]);

  const handlePayment = (e) => {
    e.preventDefault();

    // Set payment status to processing
    dispatch(setPaymentStatus("processing"));
    dispatch(setPhone(phone)); // Set phone number for payment

    // Simulate payment process (you would replace this with actual logic)
    setTimeout(() => {
      // Simulating payment success
      dispatch(setPaymentResult(`Payment of ${localAmount} was successful.`));
      dispatch(setPaymentStatus("completed"));
      onPayment({ amount: localAmount, phone });
    }, 2000);
  };

  const handleAmountChange = (e) => {
    setLocalAmount(e.target.value);
    dispatch(setAmount(e.target.value)); // Sync local amount with Redux
  };

  return (
    <form
      onSubmit={handlePayment}
      className="bg-blackGray p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6"
    >
      <h2 className="text-2xl text-center font-bold text-white mb-4">
        Make Payment
      </h2>

      {/* Amount Input */}
      <div>
        <label className="block text-white">Amount:</label>
        <input
          type="number"
          value={localAmount}
          onChange={handleAmountChange}
          className="w-full p-3 rounded-lg text-black border border-lightGray focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter payment amount"
        />
      </div>

      {/* Payment Button */}
      <button
        type="submit"
        className="w-full bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
        disabled={paymentStatus === "processing"}
      >
        {paymentStatus === "processing" ? "Processing..." : "Pay Now"}
      </button>

      {/* Payment Result */}
      {paymentStatus === "completed" && (
        <div className="text-green-500 text-center mt-4">
          {`Payment of ${localAmount} was successful!`}
        </div>
      )}

      {paymentStatus === "failed" && (
        <div className="text-red-500 text-center mt-4">
          Payment failed. Please try again.
        </div>
      )}

      {/* Instructions */}
      <div className="text-sm text-center text-lightGray">
        <p>
          Once payment is completed, you'll receive a confirmation. Thank you!
        </p>
      </div>
    </form>
  );
};

export default PaymentForm;
