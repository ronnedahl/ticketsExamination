import { create }from 'zustand'
export const useCartStore = create((set) =>({
cart:[],
addToCart: (newItem) => set((state) => ({cart: [...state.cart,newItem]})),
removeFromCart:(newItemId) => 
set((state) => ({
    cart: state.cart.filter((newItem) => newItem.id !== newItemId),
})),
clearCart: () => set({cart:[]}),


setCountTickets: (count) => set({ countTickets: count }), 
}))

