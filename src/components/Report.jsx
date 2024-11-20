import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import SalesOverview from "./SalesOverview";
import PerformanceReports from "./PerformanceReports";
import UserAnalytics from "./UserAnalytics";
import KeyMetrics from "./KeyMetrics";
import { setSelectedReport } from "../redux/reportSlice";

const Report = () => {
  const dispatch = useDispatch();

  // Fetch selectedReport and data from Redux store
  const {
    selectedReport,
    revenueData,
    barbershopData,
    registrations,
    feedback,
    metrics,
  } = useSelector((state) => state.report);

  // Function to render selected report dynamically
  const renderReport = () => {
    switch (selectedReport) {
      case "overview":
        return (
          <SalesOverview
            revenueData={revenueData}
            barbershopData={barbershopData}
          />
        );
      case "performance":
        return (
          <PerformanceReports
            registrations={registrations}
            topShops={barbershopData.slice(0, 3)}
            lowShops={barbershopData.slice(-2)}
            serviceCount={5000}
          />
        );
      case "analytics":
        return (
          <UserAnalytics
            activeUsers={3000}
            engagementStats="Logins: 5/week on average."
            feedback={feedback}
          />
        );
      case "metrics":
        return <KeyMetrics metrics={metrics} />;
      default:
        return <p>Select a report from the sidebar.</p>;
    }
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar for navigation */}
      <Sidebar onReportSelect={(report) => dispatch(setSelectedReport(report))} />

      {/* Main content area */}
      <div className="flex-1 p-8 ml-64">
        <h1 className="text-4xl font-semibold text-gold text-center mb-12">
          report Dashboard
        </h1>

        {/* Container for reports */}
        <div className="p-8 bg-white text-black shadow-xl rounded-lg">
          {/* Header for each section */}
          <div className="border-b-2 border-gold pb-4 mb-8">
            <h2 className="text-3xl font-semibold text-black">
              {selectedReport ? selectedReport.toUpperCase() : "Overview"}
            </h2>
          </div>

          {/* Render the selected report */}
          {renderReport()}
        </div>
      </div>
    </div>
  );
};

export default Report;
