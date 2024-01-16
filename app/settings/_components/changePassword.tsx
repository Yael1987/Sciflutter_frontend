import { useUserStore } from "@/app/_store/userStore";
import dynamic from "next/dynamic";
import { useState } from "react";
import ConfirmModal from "./confirmModal";
import { getToken } from "@/app/_actions/userActions";
import { ApiErrorResponse, ApiSuccessResponse } from "@/app/_interfaces/api";
import { setCookieToken } from "@/app/_actions/authActions";

const DynamicModalWindow = dynamic(() => import('@/app/_components/modal'), { ssr: false })

const ChangePassword: React.FC = () => {
  const { setAlert } = useUserStore();
  const [confirmPasswordOpen, setConfirmPasswordOpen] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");

  return (
    <form
      className="settings__col"
      action={(formData: FormData) => {
        if (!formData.get("newPassword") || !formData.get("newPasswordConfirm"))
          return setAlert("error", "Todos los campos con obligatorios");

        if ((formData.get("newPassword") as string).length < 8)
          return setAlert(
            "error",
            "La contraseña debe tener al menos 8 caracteres"
          );

        if (formData.get("newPassword") !== formData.get("newPasswordConfirm"))
          return setAlert("error", "Las contraseñas no coinciden");

        setConfirmPasswordOpen(true);
      }}
    >
      <p className="settings-section-heading--main">Cambiar contraseña</p>

      <div className="settings__row">
        <div className="settings__group">
          <label className="settings__title" htmlFor="newPassword">
            Nueva contraseña (8 caracteres minimo)
          </label>
          <input
            type="password"
            placeholder="***********"
            id="newPassword"
            name="newPassword"
            className="settings__input"
            value={newPassword}
            onChange={(e) => {
              if (e.target.value === " ") return;

              setNewPassword(e.target.value);
            }}
          />
        </div>

        <div className="settings__group">
          <label className="settings__title" htmlFor="newPasswordConfirm">
            Confirmar nueva contraseña
          </label>
          <input
            type="password"
            placeholder="***********"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            className="settings__input"
            value={newPasswordConfirm}
            onChange={(e) => {
              if (e.target.value === " ") return;

              setNewPasswordConfirm(e.target.value.trim());
            }}
          />
        </div>
      </div>

      <div className="settings__submit-container">
        <button className="settings__button">Cambiar contraseña</button>
      </div>

      <DynamicModalWindow isModalOpen={confirmPasswordOpen} onClickOverlay={() => setConfirmPasswordOpen(false)}>
        <ConfirmModal
          onClick={async (password: string) => {
            const response = await fetch('http://127.0.0.1:4000/api/v1/users/me/updatePassword', {
              headers: {
                "Authorization": `Bearer ${await getToken()}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                password,
                newPassword,
                newPasswordConfirm
              }),
              method: 'PATCH'
            })

            const data: ApiSuccessResponse | ApiErrorResponse = await response.json()

            setAlert(data.success ? "success" : 'error', data.message)

            if (data.success && data.token) {
              setCookieToken(data.token)
              setConfirmPasswordOpen(false)
            }
          }}

          onCancel={()=>setConfirmPasswordOpen(false)}
        />
      </DynamicModalWindow>
    </form>
  );
}

export default ChangePassword