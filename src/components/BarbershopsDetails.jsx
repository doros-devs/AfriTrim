import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BarbershopDetails = () => {
const { id } = useParams(); // Get the barbershop id from the URL
const [shop, setShop] = useState(null);

useEffect(() => {
const fetchBarbershopDetails = async () => {
try {
const response = await fetch(`https://afritrimbackend.onrender.com/admin/barbershops/${id}`);
if (!response.ok) {
throw new Error("Failed to fetch barbershop details");
}
const data = await response.json();
setShop(data);
} catch (err) {
console.error(err);
}
};

fetchBarbershopDetails();
}, [id]); // Only fetch when the id changes

if (!shop) return <div>Loading...</div>;

return (
<div>
<h2>{shop.name}</h2>
<p>Location: {shop.location}</p>
<p>Contact: {shop.contact}</p>
{/* Display other shop details */}
</div>
);
};

export default BarbershopDetails;