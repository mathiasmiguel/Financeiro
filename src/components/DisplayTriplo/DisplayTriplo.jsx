import { useEffect, useState } from "react";
import buscarTransacoes from "../../services/buscarTransacoes";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import meses from "../../utils/meses";
export default function DisplayTriplo() {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    async function carregar() {
      const dados = await buscarTransacoes();
      if (dados) {
        setTransacoes(dados);
      }
    }
    carregar();
  }, []); 

  let saldo = 0;
  let despesas = 0;
  let receitas = 0;
  let saldoPendente = 0;
  let despesasPendente = 0;
  let receitasPendente = 0;

  transacoes.forEach((transacao) => {
    if (transacao.isPago === true) {
      if (transacao.tipo === "Receita") {
        saldo += transacao.valor;
        receitas += transacao.valor;
      } else {
        saldo -= transacao.valor;
        despesas += transacao.valor;
      }
    } else {
      if (transacao.tipo === "Receita") {
        receitasPendente += transacao.valor;
      } else {
        despesasPendente += transacao.valor;
      }
    }
  });
  
  saldoPendente = receitasPendente - despesasPendente + saldo;
  return (
    <div className="row g-4 mb-4">
      <h3 className="fw-bold mb-1 text-dark">
        Visão geral do mês de {meses[new Date().getMonth()]}
      </h3>
      <div className="col-12 col-md-4">
        <div className="premium-card p-4 h-100">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <p className="text-muted fw-medium mb-1">Saldo Total</p>
              <h3 className="fw-bold mb-0 text-dark">{saldo.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })}</h3>
              <p className="fw-medium text-muted small ">
                {`fim do mês: ${saldoPendente.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })}`}
              </p>
            </div>
            <div className="bg-primary-soft p-2 rounded-circle">
              <Wallet size={24} />
            </div>
          </div>
          {/* <div className="mt-3 d-flex align-items-center gap-2">
            // TO-DO: adicionar uma informação sobre alteração do saldo inerente ao mes anterior 
          </div> */}
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="premium-card p-4 h-100">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <p className="text-muted fw-medium mb-1">Despesas</p>
              <h3 className="fw-bold mb-0 text-dark">
                {despesas.toLocaleString("PT-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <p className="fw-medium text-muted small ">
                {`pendente: ${despesasPendente.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })}`}
              </p>
            </div>
            <div className="bg-danger-soft p-2 rounded-circle">
              <TrendingDown size={24} />
            </div>
          </div>
          {/* <div className="mt-3 d-flex align-items-center gap-2">
            // TO-DO: adicionar uma informação sobre alteração do saldo inerente ao mes anterior 
          </div> */}
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="premium-card p-4 h-100">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <p className="text-muted fw-medium mb-1">Receitas</p>
              <h3 className="fw-bold mb-0 text-dark">
                {receitas.toLocaleString("PT-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <p className="fw-medium text-muted small ">
                {`pendente: ${receitasPendente.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })}`}
              </p>
            </div>
            <div className="bg-success-soft p-2 rounded-circle">
              <TrendingUp size={24} />
            </div>
          </div>
          {/* <div className="mt-3 d-flex align-items-center gap-2">
            // TO-DO: adicionar uma informação sobre alteração do saldo inerente ao mes anterior 
          </div> */}
        </div>
      </div>
    </div>
  );
}
