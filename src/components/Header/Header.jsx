export default function Header() {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  return (
    <header className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
      <div className="d-flex align-items-center gap-3">
        <h1 className="m-0 fw-bold">Dashboard Financeiro</h1>
      </div>

      <div className="d-flex align-items-center gap-3">
        <p className="m-0 fw-medium">{dataAtual}</p>
      </div>
    </header>
  );
}
