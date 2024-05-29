import { create } from 'zustand';

export const useTicketStore = create((set) => ({
  countTickets: 0,
  addToTickets: () => set((state) => ({ countTickets: state.countTickets + 1 })),
  removeTickets: () => set((state) => ({ countTickets: state.countTickets > 0 ? state.countTickets - 1 : 0 })),

  countorderTickets: 0,
  addToOrder: () => set((state) => ({ countorderTickets: state.countorderTickets + 1 })),
  removeToOrder: () => set((state) => ({ countorderTickets: state.countorderTickets > 0 ? state.countorderTickets - 1 : 0 })),


}));