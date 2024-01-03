import { create } from "zustand"
import { User } from "../_interfaces/api"
import { getLoggedUser } from "../_actions/userActions"

export interface UserStore{
  user: User | null,
  menuOpen: boolean,
  setUser: (newUser: User) => void,
  initLoggedUser: () => Promise<void>,
  toogleMenuOpen: () => void,
  clearUser: () => void
}

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  menuOpen: false,
  setUser: (newUser: User) => set(() => ({ user: newUser })),
  initLoggedUser: async () => {
    const { user } = get()

    const loggedUser: User | null = await getLoggedUser()

    if (user && user._id === loggedUser?._id) return

    set(() => ({ user: loggedUser }))
  },
  clearUser: () => set(() => ({ user: null })),
  toogleMenuOpen: () => set(state => ({ menuOpen: !state.menuOpen }))
}))