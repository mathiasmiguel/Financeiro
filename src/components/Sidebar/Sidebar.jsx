import FormEnviarTransacao from "../FormEnviarTransacao/FormEnviarTransacao";

export default function Sidebar() {
  return <aside className="col-md-3 col-lg-2 border-end border-2 border-dark bg-light vh-100">
      <div className="p-3">
        <h2>Menu</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">Dashboard</a>
            <a href="#" className="nav-link">Transações</a>
            <a href="#" className="nav-link">Relatórios</a>
          </li>
        </ul>
        <FormEnviarTransacao />
      </div>
    </aside>;
}