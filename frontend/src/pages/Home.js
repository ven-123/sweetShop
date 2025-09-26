import React, { useState, useEffect } from 'react';
import SweetCard from '../components/SweetCard.js';
import { getSweets, searchSweets, purchaseSweet } from '../services/api.js';

export default function Home() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState('');

  const fetchSweets = async () => {
    const res = await getSweets();
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handleSearch = async () => {
    if (search.trim() === '') return fetchSweets();
    const res = await searchSweets({ name: search });
    setSweets(res.data);
  };

  const handlePurchase = async (id) => {
    await purchaseSweet(id, { quantity: 1 });
    fetchSweets();
  };

  return (
    <div>
      <h2>All Sweets</h2>
      <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div className="sweets-list">
        {sweets.map((sweet) => (
          <SweetCard key={sweet._id} sweet={sweet} onPurchase={handlePurchase} />
        ))}
      </div>
    </div>
  );
}
