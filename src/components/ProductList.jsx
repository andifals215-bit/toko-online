import React from 'react';

export default function ProductList({ products, category, setCategory, onAddToCart }) {
  const categories = ['Semua', 'Elektronik', 'Pakaian', 'Aksesori'];

  const filtered = category === 'Semua' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <main style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 16px' }}>
      {/* Filter */}
      <div style={{ marginBottom: '24px', display: 'flex', gap: '10px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #2563eb',
              backgroundColor: category === cat ? '#2563eb' : '#ffffff',
              color: category === cat ? '#ffffff' : '#2563eb',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Produk */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {filtered.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
              <h3 style={{ fontSize: '16px', margin: '12px 0 6px 0' }}>{product.name}</h3>
              <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '0 0 12px 0' }}>Rp {product.price.toLocaleString('id-ID')}</p>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              style={{ width: '100%', padding: '10px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              + Tambah
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}