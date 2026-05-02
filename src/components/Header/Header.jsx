// import './moldura.css'

export default function Header() {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  return (
    <header className="w-100 border-bottom border-2 border-dark p-3 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="m-0">Dashboard Financeiro</h1>
        <p className="m-0">{dataAtual}</p>
      </div>
    </header>
  );
}
