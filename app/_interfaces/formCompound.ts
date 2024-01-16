import { FormState } from ".";
import { BaseComponent } from "./components";

export interface ContextValue {
  pending?: boolean;
  formAction?: (payload: FormData) => void;
  message?: string;
  success?: boolean;
}

export interface FormHOCProps extends BaseComponent {
  serverAction: (
    previewState: FormState,
    formData: FormData
  ) => Promise<FormState>
}

export interface HeaderProps {
  description: string;
  title: string;
}