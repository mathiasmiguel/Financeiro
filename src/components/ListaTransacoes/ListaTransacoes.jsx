import { useEffect, useState } from "react";
import buscarTransacoes from "../../services/buscarTransacoes";

export default function ListaTransacoes() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    buscarTransacoes().then((transacoes) => setDados(transacoes));
  }, []);
  return (
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
        })}
      </tbody>
    </table>
  );
}
