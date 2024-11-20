import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SuperAdmin from './components/SuperAdmin';
import ShopCard from './components/ShopCard';
import ShopForm from './components/ShopForm';
import Sidebar from './components/Sidebar';
import { ShopContext } from './components/ShopContext';
import BarbershopsList from './components/BarbershopsList';
import BarbershopsDetails from './components/BarbershopsDetails';
import Dashboard from './components/Dashboard';
import ManageShops from './components/ManageShops';  

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<SuperAdmin />} />
        <Route path="/superadmin" element={<SuperAdmin />} />

        {/* Dashboard route with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manage-shops" element={<ManageShops />} />
          <Route path="shopform" element={<ShopForm />} />
          <Route path="barbershopslist" element={<BarbershopsList />} />
          <Route path="barbershops/:id" element={<BarbershopsDetails />} />
        </Route>

        <Route path="/shopcard" element={<ShopCard />} />
        <Route path="/shopcontext" element={<ShopContext />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default App;
