import DisplayTriplo from "../../components/DisplayTriplo/DisplayTriplo";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaTransacoes from "../../components/ListaTransacoes/ListaTransacoes";
import FormEnviarTransacao from "../../components/FormEnviarTransacao/FormEnviarTransacao";
import buscarTransacoes from "../../services/buscarTransacoes";

export default function Home() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <main>
          <Header />
          <DisplayTriplo />
          <ListaTransacoes />
        </main>
      </div>
    </div>
  );
}
