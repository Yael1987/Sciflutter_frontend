import { createStore } from "zustand"
import type { LoggedUser } from "../_interfaces/api";

export type UserState = {
  user: LoggedUser | null;
};

export type CounterActions = {
  // decrementCount: () => void;
  // incrementCount: () => void;
};

export type CounterStore = UserState & CounterActions;

export const defaultInitState: UserState = {
  user: null,
};

export const createCounterStore = (
  initState: UserState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    // decrementCount: () => set((state) => ({ count: state.count - 1 })),
    // incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
