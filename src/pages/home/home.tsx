import { useEffect, useState } from "react";
import DisplayTriplo from "../../components/displayTriplo";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import "./home.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'

// 1. Defina o formato da sua transação (deve bater com as colunas do Postgres)
interface TransacaoInterface {
  id: number;
  descricao: string;
  valor: number | string; // O Postgres às vezes envia DECIMAL como string
  categoria: string;
  tipo: "receita" | "despesa";
  data_registro?: string;
}

export default function Home() {
  // 2. Tipando o useState: Agora o React sabe que é um array de Transações
  const [transacoes, setTransacoes] = useState<TransacaoInterface[]>([]);

  useEffect(() => {
    async function buscarDados() {
      try {
        const resposta = await fetch("http://localhost:3000/transacoes");
        // 3. Tipando o retorno da API
        const dados: TransacaoInterface[] = await resposta.json();
        setTransacoes(dados);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }
    buscarDados();
  }, []);

  // 4. Lógica de cálculo tipada
  const receitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((acc, t) => acc + Number(t.valor), 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((acc, t) => acc + Number(t.valor), 0);

  const saldo = receitas - despesas;

  return (
    <div className="home">
      <Sidebar />
      <Header />
      <DisplayTriplo saldo={saldo} despesas={despesas} receitas={receitas} />
    </div>
  );
}
