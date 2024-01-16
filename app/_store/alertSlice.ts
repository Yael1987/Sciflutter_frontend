import { StateCreator } from "zustand";

export interface AlertStore{
  hiddeAlert: () => void;
  setAlert: (type: string, message: string) => void;
  displayAlert: boolean;
  alert: {
    type: string;
    message: string;
  };
}

const createAlertSlice: StateCreator<AlertStore> = (set, get) => ({
  displayAlert: false,
  alert: {
    type: "",
    message: "",
  },
  hiddeAlert: () => {
    set(() => ({alert: {type: "", message: ""}}));
  },
  setAlert: (type: string, message: string) => {
    const { hiddeAlert } = get()
    let timeOut;
    if (timeOut) clearTimeout(timeOut)
    
    set(() => ({ alert: { type, message }}));
    
    timeOut = setTimeout(hiddeAlert, 3000);
  },
});

export default createAlertSlice