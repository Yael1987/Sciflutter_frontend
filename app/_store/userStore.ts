import { create } from "zustand"
import type { ArticlePreview, LoggedUser } from "../_interfaces/api"
import { getLoggedUser } from "../_actions/userActions"
import createAlertSlice, { type AlertStore } from "./alertSlice";
import { getSavedArticles } from "../_actions/featuresActions";

export interface UserStore {
  user: LoggedUser | null;
  savedArticles: ArticlePreview[] | null;
  setUser: (newUser: LoggedUser) => void;
  getSavedArticles: () => Promise<void>;
  initLoggedUser: () => Promise<boolean>;
  menuOpen: boolean;
  toogleMenuOpen: () => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore & AlertStore>()((set, get, store) => ({
  user: null,
  savedArticles: null,
  menuOpen: false,
  setUser: (newData: LoggedUser) => set(() => ({ user: { ...newData } })),
  getSavedArticles: async () => {
    const savedArticles: ArticlePreview[] = await getSavedArticles()

    set(() => ({ savedArticles }))
  },
  initLoggedUser: async () => {
    const { user } = get()

    const loggedUser: LoggedUser | null = await getLoggedUser()

    if(!loggedUser) return false

    if (user && user._id === loggedUser?._id) return true

    set(() => ({ user: loggedUser }))

    return true
  },
  clearUser: () => set(() => ({ user: null })),
  toogleMenuOpen: () => set(state => ({ menuOpen: !state.menuOpen })),
  ...createAlertSlice(set, get, store)
}))