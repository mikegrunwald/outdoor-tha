import { create } from "zustand";

const useGetawayStore = create((set) => ({
  // Trip details
  destinationId: null,
  dates: { checkIn: "", checkOut: "" },
  guests: { adults: 2, children: 0 },

  // Selections
  selectedLodgingId: null,
  selectedActivityIds: [],
  selectedAddOnIds: [],
  selectedBundleId: null,

  // Actions
  setDestination: (id) => set({ destinationId: id }),

  setDates: (dates) => set({ dates }),

  setGuests: (guests) => set({ guests }),

  selectLodging: (id) =>
    set((state) => ({
      selectedLodgingId: state.selectedLodgingId === id ? null : id,
      selectedAddOnIds: [],
      selectedBundleId: null,
    })),

  toggleActivity: (id) =>
    set((state) => ({
      selectedActivityIds: state.selectedActivityIds.includes(id)
        ? state.selectedActivityIds.filter((a) => a !== id)
        : [...state.selectedActivityIds, id],
      selectedBundleId: null,
    })),

  toggleAddOn: (id) =>
    set((state) => ({
      selectedAddOnIds: state.selectedAddOnIds.includes(id)
        ? state.selectedAddOnIds.filter((a) => a !== id)
        : [...state.selectedAddOnIds, id],
    })),

  selectBundle: (id) =>
    set((state) => ({
      selectedBundleId: state.selectedBundleId === id ? null : id,
    })),

  reset: () =>
    set({
      destinationId: null,
      dates: { checkIn: "", checkOut: "" },
      guests: { adults: 2, children: 0 },
      selectedLodgingId: null,
      selectedActivityIds: [],
      selectedAddOnIds: [],
      selectedBundleId: null,
    }),
}));

export default useGetawayStore;
