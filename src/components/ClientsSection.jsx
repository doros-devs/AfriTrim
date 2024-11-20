import React from "react";

const ClientsSection = ({ clients }) => {
  return (
    <section className="bg-black text-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gold border-b border-gold pb-2 mb-6">
        Manage Clients
      </h2>
      <p className="text-sm text-gray-400 mb-4">View and manage your clients effectively.</p>

      <div className="space-y-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-800 transition-all"
          >
            <div className="flex flex-col">
              <span className="text-gold font-semibold">{client.name}</span>
              <span className="text-gray-400 text-xs">{client.lastVisit}</span>
            </div>
            <span className="text-white font-medium">{client.service}</span>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-gold text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors w-full">
        View All Clients
      </button>
    </section>
  );
};

export default ClientsSection;
