import React, { useContext, useState } from 'react';
import { ShopContext } from './ShopContext'; 

const ManageShops = () => {
const { shops, addShop } = useContext(ShopContext); 
const [shopName, setShopName] = useState('');
const [ownerName, setOwnerName] = useState('');

const handleRegisterShop = (e) => {
e.preventDefault();
if (!shopName || !ownerName) {
alert('Please provide both shop name and owner name');
return;
}

const newShop = {
id: shops.length + 1, 
name: shopName,
owner: ownerName,
};

addShop(newShop);

setShopName('');
setOwnerName('');
};

return (
<div className="min-h-screen bg-black text-yellow-400 p-6">
<h2 className="text-3xl font-bold mb-4">Manage Shop Owners</h2>
<form onSubmit={handleRegisterShop} className="space-y-4">
<div>
<label className="block text-lg">
Shop Name:
<input
type="text"
value={shopName}
onChange={(e) => setShopName(e.target.value)}
placeholder="Enter Shop Name"
required
className="mt-2 p-2 w-full bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-400 rounded-md"
/>
</label>
</div>
<div>
<label className="block text-lg">
Owner Name:
<input
type="text"
value={ownerName}
onChange={(e) => setOwnerName(e.target.value)}
placeholder="Enter Owner Name"
required
className="mt-2 p-2 w-full bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-400 rounded-md"
/>
</label>
</div>
<button
type="submit"
className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md"
>
Register Shop
</button>
</form>

<h3 className="text-2xl mt-6">Registered Shops</h3>
{shops.length === 0 ? (
<p className="mt-2">No shops registered yet.</p>
) : (
<ul className="mt-2 space-y-2">
{shops.map((shop) => (
<li key={shop.id} className="text-xl">
{shop.name} - Owner: {shop.owner}
</li>
))}
</ul>
)}
</div>
);
};

export default ManageShops;