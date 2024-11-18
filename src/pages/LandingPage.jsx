import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux
import { useNavigate } from "react-router-dom";
import kymBarbershop from "../assets/kym-barbershop.jpg";
import {
  toggleShowForm,
  setPaymentSuccessful,
  setMpesaNumber,
  setAmount,
  setPaymentConfirmed,
  setFormStep,
  setLoading,
  toggleProfileEdit,
} from "../redux/landingPageSlice"; // Import the actions

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    showForm,
    paymentSuccessful,
    mpesaNumber,
    amount,
    paymentConfirmed,
    formStep,
    loading,
    showProfileEdit,
  } = useSelector((state) => state.landingPage); // Get state from Redux

  const handleGetStarted = () => dispatch(toggleShowForm());

  const handleAddShop = (event) => {
    event.preventDefault();
    if (paymentConfirmed) {
      dispatch(setPaymentSuccessful(true));
    } else {
      alert("Please confirm that payment is successful");
    }
  };

  const handlePaymentSuccess = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      navigate("/dashboard");
    }, 1500);
  };

  const handlePay = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setPaymentConfirmed(true));
      dispatch(setPaymentSuccessful(true));
    }, 1500);
  };

  const nextStep = () => dispatch(setFormStep(formStep + 1));
  const prevStep = () => dispatch(setFormStep(formStep - 1));

  const toggleProfileEdit = () => {
    dispatch(toggleProfileEdit());
  };

  return (
    <div className="overflow-hidden min-h-screen bg-black text-white">
      {!showForm ? (
        <div
          className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed text-white overflow-hidden"
          style={{ backgroundImage: `url(${kymBarbershop})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to Afri Trim
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Where we fix your looks
            </p>
            <button
              onClick={handleGetStarted}
              className="p-4 bg-gold text-black border-2 border-gold rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              Get Started
            </button>
            {/* Button to toggle Profile Edit */}
            <button
              onClick={toggleProfileEdit}
              className="mt-4 p-4 bg-gold text-black border-2 border-gold rounded-full font-semibold hover:bg-black hover:text-white transition-all"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : paymentSuccessful ? (
        <div
          className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white overflow-hidden"
          style={{ backgroundImage: `url(${kymBarbershop})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 bg-black text-white p-8 rounded-md border-4 border-white max-w-md w-full">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Payment Successful!
            </h1>
            <p className="text-lg text-center mb-8">
              Your payment has been processed. You can now proceed to the
              dashboard.
            </p>
            <button
              onClick={handlePaymentSuccess}
              className="w-full p-3 bg-gold text-black font-semibold rounded-md transition-all transform hover:scale-105"
            >
              {loading ? "Processing..." : "Go to Dashboard"}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white overflow-hidden"
          style={{ backgroundImage: `url(${kymBarbershop})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 bg-black text-white p-8 rounded-md border-4 border-white max-w-xl w-full">
            <h1 className="text-2xl font-semibold mb-6 text-center text-white">
              Add Your Shop
            </h1>
            {/* Progress bar */}
            <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
              <div
                className="bg-gold h-2 rounded-full transition-all duration-500"
                style={{ width: `${(formStep / 3) * 100}%` }}
              ></div>
            </div>
            <form onSubmit={handleAddShop} className="space-y-6">
              {formStep === 1 && (
                <>
                  <input
                    type="text"
                    placeholder="Owner's Name"
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="email"
                    placeholder="Contact Email"
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="text-gold font-semibold hover:underline"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {formStep === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="text"
                    placeholder="Shop Location"
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-gold font-semibold hover:underline"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="text-gold font-semibold hover:underline"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {formStep === 3 && (
                <>
                  <h2 className="text-lg font-semibold">Payment Details</h2>
                  <input
                    type="text"
                    placeholder="MPesa Phone Number"
                    value={mpesaNumber}
                    onChange={(e) => dispatch(setMpesaNumber(e.target.value))}
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => dispatch(setAmount(e.target.value))}
                    required
                    className="w-full p-3 border-2 border-white rounded-md bg-transparent text-white font-medium focus:ring-2 focus:ring-gold"
                  />
                  <button
                    type="button"
                    onClick={handlePay}
                    className="p-2 bg-gold text-black font-semibold rounded-md border border-white transition-all hover:bg-black hover:text-gold focus:outline-none focus:ring-4 focus:ring-gold"
                  >
                    {loading ? "Processing..." : "Pay"}
                  </button>

                  {paymentConfirmed && (
                    <div className="text-center text-green-500 mt-4">
                      <p>Payment Successful</p>
                    </div>
                  )}
                  <div className="flex justify-between items-center space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 bg-transparent text-gold font-semibold rounded-md border border-gold hover:bg-gold hover:text-black transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gold text-black font-semibold rounded-md border border-gold hover:bg-black hover:text-white transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Conditionally render the Profile Edit form */}
      {showProfileEdit && <ProfileEdit />}
    </div>
  );
};

export default LandingPage;
