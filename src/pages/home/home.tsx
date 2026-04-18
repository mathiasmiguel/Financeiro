import { useEffect, useState } from 'react'
import DisplayTriplo from '../../components/displayTriplo'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import './home.css' 

// 1. Defina o formato da sua transação (deve bater com as colunas do Postgres)
interface Transacao {
  id: number;
  descricao: string;
  valor: number | string; // O Postgres às vezes envia DECIMAL como string
  categoria: string;
  tipo: 'receita' | 'despesa';
  data_registro?: string;
}

export default function Home() {
    // 2. Tipando o useState: Agora o React sabe que é um array de Transações
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {
        async function buscarDados() {
            try {
                const resposta = await fetch('http://localhost:3000/transacoes');
                // 3. Tipando o retorno da API
                const dados: Transacao[] = await resposta.json();
                setTransacoes(dados);
            } catch (erro) {
                console.error("Erro ao buscar dados:", erro);
            }
        }
        buscarDados();
    }, []);

    // 4. Lógica de cálculo tipada
    const receitas = transacoes
        .filter(t => t.tipo === 'receita')
        .reduce((acc, t) => acc + Number(t.valor), 0);

    const despesas = transacoes
        .filter(t => t.tipo === 'despesa')
        .reduce((acc, t) => acc + Number(t.valor), 0);

    const saldo = receitas - despesas;

    return (
      <>
      <Sidebar/>
        <Header />
        <ul id="lista">
          {transacoes.map((t) => (
            <li key={t.id}>
              {t.descricao}: R$ {Number(t.valor).toFixed(2)}
            </li>
          ))}
        </ul>
        
        {/* Passando os valores calculados */}
        <DisplayTriplo 
            saldo={saldo} 
            despesas={despesas} 
            receitas={receitas} 
        />
      </>
    );
}