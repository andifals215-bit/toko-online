import React from 'react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, totalPrice, isOrderPlaced, onCheckout }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '360px', height: '100%', backgroundColor: '#ffffff', boxShadow: '-2px 0 10px rgba(0,0,0,0.2)', padding: '20px', boxSizing: 'border-box', zIndex: 1000, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Keranjang Belanja</h2>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
      </div>

      {isOrderPlaced ? (
        <div style={{ marginTop: '40px', padding: '16px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '6px', textAlign: 'center' }}>
          ✅ Pesanan berhasil dibuat! Terima kasih.
        </div>
      ) : (
        <>
          <div style={{ flex: 1, overflowY: 'auto', margin: '16px 0' }}>
            {cart.length === 0 ? (
              <p style={{ color: '#6b7280', textAlign: 'center' }}>Keranjang masih kosong.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <div>
                    <div style={{ fontWeight: '500', fontSize: '14px' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Rp {item.price.toLocaleString('id-ID')} x {item.quantity}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button onClick={() => onUpdateQuantity(item.id, -1)} style={{ width: '24px', height: '24px', cursor: 'pointer' }}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} style={{ width: '24px', height: '24px', cursor: 'pointer' }}>+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>
                <span>Total:</span>
                <span style={{ color: '#16a34a' }}>Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
              <button
                onClick={onCheckout}
                style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
              >
                Checkout Sekarang
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}