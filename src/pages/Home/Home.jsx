import DisplayTriplo from "../../components/DisplayTriplo/DisplayTriplo";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaTransacoes from "../../components/ListaTransacoes/ListaTransacoes";
import FormEnviarTransacao from "../../components/FormEnviarTransacao/FormEnviarTransacao";
export default function Home() {
  return <div className="container-fluid d-flex flex-column vh-100 p-0">
      <Header />

      <div className="row g-0 flex-grow-1">
        <Sidebar />
        <main className="col p-4">
           <DisplayTriplo />
           <ListaTransacoes />
           {/* <FormEnviarTransacao />  */}
        </main>
      </div>
    </div>;
}