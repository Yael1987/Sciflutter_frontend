"use client"
import { useSettingsContext } from "@/app/_store/settingsContext";
import { useUserStore } from "@/app/_store/userStore";
import "@/styles/components/settings.scss";
import clsx from "clsx";
import { useState } from "react";
import ChangePassword from "./changePassword";

const PrivacitySettings: React.FC = () => {
  const { pending } = useSettingsContext()
  const [selectOption, setSelectOption] = useState<string>('desactivar')
  const [confirmDisableOpen, setConfirmDisableOpen] = useState<boolean>(false)
  const { setAlert } = useUserStore()

  return (
    <div className="settings-section-main--container">
      <p className="settings-section-heading--main">Acceso</p>

      <div className="settings">
        <ChangePassword/>

        <form className="settings__col">
          <p className="settings-section-heading--main">Cuenta</p>

          <div className="settings__row">
            <div className="settings__group">
              <label className="settings__title" htmlFor="name">
                Eliminar o desactivar cuenta
              </label>
              <select
                name="disable"
                id="disable"
                className="settings__input"
                defaultValue={selectOption}
                onChange={(e) => setSelectOption(e.target.value.trim())}
              >
                <option value="desactivar">Desactivar</option>
                <option value="eliminar">Eliminar</option>
              </select>
            </div>

            <button
              className={clsx(
                pending && "loading",
                "settings__button settings__button--full"
              )}
            >
              {pending
                ? "Guardando..."
                : `${selectOption.at(0)?.toUpperCase()}${selectOption.substring(
                    1
                  )} cuenta`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivacitySettings;
