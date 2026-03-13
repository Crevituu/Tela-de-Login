import React, { useState, useCallback } from 'react';
import type { LoginFormData, InputFieldProps } from './types';
import './LoginPage.css';

// ── Sub-components ──────────────────────────────────────────

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div className="field">
    <label htmlFor={id} className="field__label">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="field__input"
      required={required}
      autoComplete={type === 'password' ? 'current-password' : 'email'}
    />
  </div>
);

const BackgroundOrbs: React.FC = () => (
  <div className="login-bg" aria-hidden="true">
    <div className="login-bg__orb login-bg__orb--1" />
    <div className="login-bg__orb login-bg__orb--2" />
    <div className="login-bg__orb login-bg__orb--3" />
  </div>
);

const LogoIcon: React.FC = () => (
  <div className="login-logo">
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  </div>
);

// ── Main component ──────────────────────────────────────────

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleFieldChange = useCallback(
    (field: keyof Pick<LoginFormData, 'email' | 'password'>) =>
      (value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
      },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      // Simulate async login
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));

      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    },
    []
  );

  return (
    <>
      <BackgroundOrbs />

      <main className="login-wrapper" role="main">
        <div className="login-card">

          {/* Header */}
          <header className="login-header">
            <LogoIcon />
            <h1 className="login-title">
              Bem-vindo <em>de volta</em>
            </h1>
            <p className="login-subtitle">Entre na sua conta para continuar</p>
            <div className="login-divider" />
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form" noValidate>
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleFieldChange('email')}
              required
            />

            <InputField
              id="password"
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleFieldChange('password')}
              required
            />

            {/* Options row */}
            <div className="login-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }))
                  }
                />
                Lembrar-me
              </label>
              <a href="#" className="forgot-link">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading && <span className="btn-submit__spinner" aria-hidden="true" />}
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Footer */}
          <footer className="login-card-footer">
            Não tem uma conta?{' '}
            <a href="#">Criar conta</a>
          </footer>
        </div>
      </main>

      {/* Toast notification */}
      {showToast && (
        <div className="toast" role="status" aria-live="polite">
          ✓ Login realizado com sucesso!
        </div>
      )}
    </>
  );
};

export default LoginPage;
