import React from 'react';

export default function Navbar({ totalItems, onOpenCart }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ margin: 0, color: '#2563eb', fontSize: '24px' }}>TokoOnline React</h1>
      <button
        onClick={onOpenCart}
        style={{ padding: '10px 18px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Keranjang ({totalItems})
      </button>
    </header>
  );
}