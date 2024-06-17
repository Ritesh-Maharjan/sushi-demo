import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PopupState {
  popup: boolean;
  toggle: () => void;
}

export const usePopupStore = create<PopupState>()(
  devtools(
    persist(
      (set) => ({
        popup: false,
        toggle: () => set((state) => ({ popup: !state.popup })),
      }),
      {
        name: "popup-storage",
      }
    )
  )
);
