import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS_DATA } from './data/products';

export default function App() {
  const [products] = useState(PRODUCTS_DATA);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('Semua');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Tambah ke keranjang
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Ubah jumlah item di keranjang
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setIsOrderPlaced(false);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh', paddingBottom: '40px' }}>
      <Navbar totalItems={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      <ProductList products={products} category={category} setCategory={setCategory} onAddToCart={addToCart} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        totalPrice={totalPrice}
        isOrderPlaced={isOrderPlaced}
        onCheckout={handleCheckout}
      />
    </div>
  );
}