import { FormState } from ".";
import { BaseComponent } from "./components";

export interface ContextValue {
  pending?: boolean;
  formAction?: (payload: FormData) => void;
  message?: string;
}

export interface FormHOCProps extends BaseComponent {
  serverAction: (
    previewState: FormState,
    formData: FormData
  ) => Promise<FormState>;
  type?: string;
}

export interface HeaderProps {
  description: string;
  title: string;
}