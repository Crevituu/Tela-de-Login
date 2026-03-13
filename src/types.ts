// ============================================================
// types.ts — Interfaces e tipos da tela de login
// ============================================================

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}
