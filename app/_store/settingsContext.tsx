"use client"
import { createContext, useContext, useState } from "react";
import { useFormStatus } from "react-dom";

import { revalidateUsers, updateUserData } from "../_actions/userActions";

import type { BaseComponent } from "../_interfaces/components";

import { useUserStore } from "./userStore";

interface SettingsValue {
  addPicture(blob: Blob, name: string): void;
  deletePicture(url: string, name: string): void;
  pending: boolean;
  requestDataUpdate(formData: FormData): void,
}

const VALID_INPUTS = ["name", "lastName", "description", "discipline"];

const SettingsContext = createContext<SettingsValue>({
  addPicture(blob, name) { },
  deletePicture(blob, name) { },
  pending: false,
  requestDataUpdate(formData: FormData) { },
})

const SettingsProvider: React.FC<BaseComponent> = ({ children }) => {
  const [contextFormData, setContextFormData] = useState<FormData>(new FormData());
  const [photos, setPhotos] = useState({})
  const { pending } = useFormStatus();
  const { setAlert } = useUserStore()
  const { setUser } = useUserStore()
  
  const addPicture = (blob: Blob, name: string) => {
    if (contextFormData.has(name)) {
      contextFormData.set(name, blob);
    } else {
      contextFormData.append(name, blob);
    }
  };
  
  const deletePicture = (url: string, name: string) => {
    if (contextFormData.has(`photos[${name}]`)) {
      contextFormData.set(`photos[${name}]`, url)
    } else {
      contextFormData.append(`photos[${name}]`, url);
    }
  }

  const requestDataUpdate = async (formData: FormData): Promise<void> => {
    const formEntries = Array.from(formData.keys());

    formEntries.forEach((entry) => {
      if (formData.get(entry) && VALID_INPUTS.includes(entry)) {
        if (formData.has(entry)) {
          contextFormData.set(entry, formData.get(entry) as string);  
        } else { 
          contextFormData.append(entry, formData.get(entry) as string);
        }
      }
    });

    const apiResponse = await updateUserData(contextFormData);

    if (apiResponse.success && apiResponse.user) {
      setAlert('success', apiResponse.message)
      setUser(apiResponse.user);
      revalidateUsers();
    } else {
      setAlert('error', apiResponse.message)
    }
  }

  return (
    <SettingsContext.Provider value={{ addPicture, pending, requestDataUpdate, deletePicture }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)

  return context
}

export default SettingsProvider