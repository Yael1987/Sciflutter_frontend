import Button from "@/app/_components/button";
import "@/styles/components/confirm-modal.scss";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

interface Props{
  onClick(password: string): void,
  onCancel(): void
}

const ConfirmModal: React.FC<Props> = ({ onClick, onCancel }) => {
  const [password, setPassword] = useState('')

  return (
    <div className="confirm-modal">
      <div className="confirm-modal__header">
        <p className="confirm-modal__header-title">Confirmar cambios</p>

        <Button className="confirm-modal__header-close" onClick={onCancel}>
          <X width={32} className="confirm-modal__header-close__icon" />
        </Button>
      </div>

      <div className="confirm-modal__group">
        <label htmlFor="password" className="confirm-modal__group-label">
          Introduce tu contraseña actual
        </label>
        <input
          className="confirm-modal__group-input"
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="confirm-modal__buttons">
        <button
          className="confirm-modal__button confirm-modal__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          onClick={() => {
            onClick(password);
          }}
          className="confirm-modal__button confirm-modal__button--accept"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
