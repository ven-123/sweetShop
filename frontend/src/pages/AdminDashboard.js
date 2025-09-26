import React, { useState, useEffect } from 'react';
import SweetCard from '../components/SweetCard.js';
import SweetForm from '../components/SweetForm.js';
import { getSweets, addSweet, updateSweet, deleteSweet, restockSweet, purchaseSweet } from '../services/api.js';

export default function AdminDashboard() {
  const [sweets, setSweets] = useState([]);
  const [editableSweet, setEditableSweet] = useState(null);

  const fetchSweets = async () => {
    const res = await getSweets();
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handleAdd = async (sweetData) => {
    if (editableSweet) {
      await updateSweet(editableSweet._id, sweetData);
      setEditableSweet(null);
    } else {
      await addSweet(sweetData);
    }
    fetchSweets();
  };

  const handleDelete = async (id) => {
    await deleteSweet(id);
    fetchSweets();
  };

  const handleRestock = async (id) => {
    const quantity = parseInt(prompt('Enter quantity to restock:'));
    if (!isNaN(quantity)) {
      await restockSweet(id, { quantity });
      fetchSweets();
    }
  };

  const handleEdit = (sweet) => setEditableSweet(sweet);
  const handleCancel = () => setEditableSweet(null);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <SweetForm onSubmit={handleAdd} editableSweet={editableSweet} onCancel={handleCancel} />
      <div className="sweets-list">
        {sweets.map((sweet) => (
          <SweetCard
            key={sweet._id}
            sweet={sweet}
            onDelete={handleDelete}
            onRestock={handleRestock}
            onEdit={handleEdit}
            isAdmin={true}
            onPurchase={purchaseSweet} 
          />
        ))}
      </div>
    </div>
  );
}
