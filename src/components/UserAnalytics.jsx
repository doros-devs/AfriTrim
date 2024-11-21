import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const UserAnalytics = () => {
  const dispatch = useDispatch();
  const [activeUsers, setActiveUsers] = useState(0);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch active users count from your local users API or database
        const usersResponse = await axios.get("http://localhost:5000/users");
        const activeUserCount = usersResponse.data.filter(user => user.active).length;
        setActiveUsers(activeUserCount);

        // Fetch customer feedback from the provided API endpoint
        const feedbackResponse = await axios.get(
          "https://afritrimbackend.onrender.com/api/review/",
          { headers: { accept: "application/json" } }
        );
        setFeedback(feedbackResponse.data);

        // Optionally, dispatch actions to Redux if needed
        // dispatch(setUserAnalytics({ activeUsers: activeUserCount, feedback: feedbackResponse.data }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="space-y-8">
      {/* Active Users */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">Active Users</h2>
        <p className="text-lg font-medium text-gray-800">Total Active Users: {activeUsers}</p>
      </div>

      {/* Customer Feedback */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">Customer Feedback</h2>
        <ul>
          {feedback.map((entry, index) => (
            <li
              key={index}
              className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
            >
              <p className="text-lg font-semibold text-gray-700">
                Barber ID: {entry.barber_id} (Rating: {entry.rating})
              </p>
              <p className="text-sm text-gray-600">{entry.comment}</p>
              <p className="text-xs text-gray-500">
                Created at: {new Date(entry.created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserAnalytics;
