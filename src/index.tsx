// ============================================================
// index.tsx — Ponto de entrada: monta o app React no DOM
// ============================================================

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
