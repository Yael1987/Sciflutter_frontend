import { create } from "zustand"
import { User } from "../_interfaces/api"
import { getLoggedUser } from "../_actions/userActions"

export interface UserStore {
  user: User | null;
  menuOpen: boolean;
  displayNotification: boolean;
  notification: {
    type: string;
    message: string;
  };
  setUser: (newUser: User) => void;
  initLoggedUser: () => Promise<void>;
  showNotification: () => void;
  setNotification: (type: string, message: string) => void;
  toogleMenuOpen: () => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  menuOpen: false,
  displayNotification: false,
  notification: {
    type: "",
    message: ""
  },
  showNotification: () => {
    set(state => ({ displayNotification: !state.displayNotification }))
  },
  setNotification: (type: string, message: string) => {
    set(() => ({ notification: { type, message } }))
  },
  setUser: (newData: User) => set(() => ({ user: { ...newData } })),
  initLoggedUser: async () => {
    const { user } = get()

    const loggedUser: User | null = await getLoggedUser()

    if (user && user._id === loggedUser?._id) return

    set(() => ({ user: loggedUser }))
  },
  clearUser: () => set(() => ({ user: null })),
  toogleMenuOpen: () => set(state => ({ menuOpen: !state.menuOpen }))
}))