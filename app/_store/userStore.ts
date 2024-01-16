import { create } from "zustand"
import { User } from "../_interfaces/api"
import { getLoggedUser } from "../_actions/userActions"
import createAlertSlice, { type AlertStore } from "./alertSlice";

export interface UserStore {
  user: User | null;
  setUser: (newUser: User) => void;
  initLoggedUser: () => Promise<boolean>;
  menuOpen: boolean;
  toogleMenuOpen: () => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore & AlertStore>()((set, get, store) => ({
  user: null,
  menuOpen: false,
  setUser: (newData: User) => set(() => ({ user: { ...newData } })),
  initLoggedUser: async () => {
    const { user } = get()

    const loggedUser: User | null = await getLoggedUser()

    if(!loggedUser) return false

    if (user && user._id === loggedUser?._id) return true

    set(() => ({ user: loggedUser }))

    return true
  },
  clearUser: () => set(() => ({ user: null })),
  toogleMenuOpen: () => set(state => ({ menuOpen: !state.menuOpen })),
  ...createAlertSlice(set, get, store)
}))