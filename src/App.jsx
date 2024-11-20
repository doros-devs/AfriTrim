import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ManageShops from './components/ManageShops';
import Login from './components/SuperAdmin';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SuperAdmin from './components/SuperAdmin';
import ShopCard from './components/ShopCard';
import ShopForm from './components/ShopForm';
import Sidebar from './components/Sidebar';
import { ShopContext } from './components/ShopContext';
import BarbershopsList from './components/BarbershopsList';
import BarbershopsDetails from './components/BarbershopsDetails';
// import Terms from './components/Terms';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-shops" element={<ManageShops />} />
        <Route path="/superadmin" element={<SuperAdmin />} />
        <Route path="/shopcard" element={<ShopCard />} />
        <Route path="/shopform" element={<ShopForm />} />
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/shopcontext" element={<ShopContext />} />
        < Route path="/barbershopslist" element={<BarbershopsList />} />
        <Route path="/barbershopdetails" element={<BarbershopDetails />} />
        {/* <Route path="/terms" element={<Terms />} /> */}
      </Routes>
    </div>
  );
};

export default App;