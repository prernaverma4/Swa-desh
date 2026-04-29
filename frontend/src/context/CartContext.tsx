'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
    _id: string;
    name: string;
    price: number;
    image: string;
    artisanName?: string;
    quantity: number;
    stock: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem('swadesh_cart');
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to local storage when cart changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('swadesh_cart', JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item._id === newItem._id);
            const addQuantity = newItem.quantity || 1;

            if (existingItem) {
                // If item exists, update quantity (but don't exceed stock)
                return prevCart.map(item =>
                    item._id === newItem._id
                        ? { ...item, quantity: Math.min(item.quantity + addQuantity, item.stock) }
                        : item
                );
            } else {
                // If it's a new item, add it
                return [...prevCart, { ...newItem, quantity: addQuantity } as CartItem];
            }
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prevCart => prevCart.filter(item => item._id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart(prevCart => prevCart.map(item => {
            if (item._id === id) {
                return { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
