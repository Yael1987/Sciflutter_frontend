import { create } from "zustand"
import { User } from "../_interfaces/api"
import { getLoggedUser } from "../_actions/userActions"

export interface UserStore{
  user: User | null,
  setUser: (newUser: User) => void,
  initLoggedUser: () => Promise<void>
}

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  setUser: (newUser: User) => set(() => ({ user: newUser })),
  initLoggedUser: async () => {
    const { user } = get()

    const loggedUser: User | null = await getLoggedUser()

    if (user && user._id === loggedUser?._id) return

    set(() => ({ user: loggedUser }))
  }
}))