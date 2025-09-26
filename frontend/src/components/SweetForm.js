import React, { useState, useEffect } from 'react';

export default function SweetForm({ onSubmit, editableSweet, onCancel }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (editableSweet) {
      setName(editableSweet.name);
      setCategory(editableSweet.category);
      setPrice(editableSweet.price);
      setQuantity(editableSweet.quantity);
    }
  }, [editableSweet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, price: Number(price), quantity: Number(quantity) });
    setName('');
    setCategory('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className="sweet-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <button type="submit">{editableSweet ? 'Update Sweet' : 'Add Sweet'}</button>
      {editableSweet && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
