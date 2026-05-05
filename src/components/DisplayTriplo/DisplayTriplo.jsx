import { useEffect, useState } from "react";
import buscarTransacoes from "../../services/buscarTransacoes";
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';


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
  }, []); // O array vazio garante que busque apenas uma vez

  // O restante da sua função calcularValores() pode continuar igual
  // utilizando a variável 'transacoes' do estado.
    let saldo = 0;
    let despesas = 0;
    let receitas = 0;
    transacoes.forEach((transacao) => {
      if (transacao.tipo === "Receita") {
        saldo += transacao.valor;
        receitas += transacao.valor;
      } else {
        saldo -= transacao.valor;
        despesas += transacao.valor;
      }
    }
  );
  return (
    <div className="row g-4 mb-4">
      <div className="col-12 col-md-4">
        <div className="premium-card p-4 h-100">
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <p className="text-muted fw-medium mb-1">Saldo Total</p>
              <h3 className="fw-bold mb-0 text-dark">{saldo.toLocaleString('PT-BR')}</h3>
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
              <h3 className="fw-bold mb-0 text-dark">{despesas.toLocaleString('PT-BR')}</h3>
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
              <h3 className="fw-bold mb-0 text-dark">{receitas.toLocaleString('PT-BR')}</h3>
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
