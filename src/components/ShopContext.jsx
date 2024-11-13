import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState([]);

  const addShop = (shop) => {
    setShops([...shops, shop]);
  };

  return (
    <ShopContext.Provider value={{ shops, addShop }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
