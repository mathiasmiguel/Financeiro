import DisplayExpense from "../Displays/DisplayExpense";
import DisplayIncome from "../Displays/DisplayIncome";
import DisplaySaldo from "../Displays/DisplaySaldo";
import { transacaoService } from "../../services/api";
import { useEffect, useState } from "react";
import "./DisplayTriplo.css";
export default function DisplayTriplo() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    transacaoService.getTodasTransacoes().then(transacoes => setDados(transacoes)).catch(error => console.error("Erro ao buscar transações:", error));
  }, []);
  function calcularPropsValores() {
    let saldo = 0;
    let despesas = 0;
    let receitas = 0;
    dados.map(transacao => {
      if (transacao.tipo === "receita") {
        saldo += transacao.valor;
        receitas += transacao.valor;
      } else {
        saldo -= transacao.valor;
        despesas += transacao.valor;
      }
      console.log("saldo", saldo);
      console.log("despesas", despesas);
      console.log("receitas", receitas);
    });
    return {
      saldo: Number(saldo),
      despesas: Number(despesas),
      receitas: Number(receitas)
    };
  }
  const {
    saldo,
    despesas,
    receitas
  } = calcularPropsValores();
  return <div className="row ">
            <DisplaySaldo saldo={saldo} />
            <DisplayExpense despesas={despesas} />
            <DisplayIncome receitas={receitas} />
        </div>;
}