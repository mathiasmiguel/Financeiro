import { useEffect, useState } from "react";
import buscarTransacoes from "../../services/buscarTransacoes";

export default function ListaTransacoes() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    buscarTransacoes().then((transacoes) => setDados(transacoes));
  }, []);
  const [filtroTipoTransacao, setFilterType] = useState('ALL');
  return (
    <div className="premium-card p-4 h-100">
      <div className="d-flex align-items-center gap-2">
          <div className="bg-light p-1 rounded d-flex">
            <button 
              className={`btn btn-sm ${filtroTipoTransacao === 'ALL' ? 'bg-white shadow-sm fw-medium' : 'btn-light border-0 text-muted'}`}
              onClick={() => setFilterType('ALL')}
            >
              Todas
            </button>
            <button 
              className={`btn btn-sm ${filtroTipoTransacao === 'Receita' ? 'bg-white shadow-sm fw-medium text-success-custom' : 'btn-light border-0 text-muted'}`}
              onClick={() => setFilterType('Receita')}
            >
              Receitas
            </button>
            <button 
              className={`btn btn-sm ${filtroTipoTransacao === 'Despesa' ? 'bg-white shadow-sm fw-medium text-danger-custom' : 'btn-light border-0 text-muted'}`}
              onClick={() => setFilterType('Despesa')}
            >
              Despesas
            </button>
            </div>
            </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Tipo</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((transacao) => {
          if (transacao.tipo === filtroTipoTransacao || filtroTipoTransacao === 'ALL') {
          const dataTransacao = new Date(transacao.data_registro);
          const dataFormatada = dataTransacao.toLocaleDateString("pt-BR");
          return (
            <tr key={transacao.id}>
              <td>{transacao.descricao}</td>
              <td>{transacao.valor.toFixed(2)}</td>
              <td>{transacao.categoria}</td>
              <td>{transacao.tipo}</td>
              <td>{dataFormatada}</td>
            </tr>
          );
}})}
      </tbody>
    </table>
    </div>
  );
}
