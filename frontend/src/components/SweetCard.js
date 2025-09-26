import React from 'react';

export default function SweetCard({ sweet, onPurchase, onDelete, isAdmin, onRestock, onEdit }) {
  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>
      <button disabled={sweet.quantity === 0} onClick={() => onPurchase(sweet._id)}>
        Purchase
      </button>
      {isAdmin && (
        <>
          <button onClick={() => onRestock(sweet._id)}>Restock</button>
          <button onClick={() => onEdit(sweet)}>Edit</button>
          <button onClick={() => onDelete(sweet._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
