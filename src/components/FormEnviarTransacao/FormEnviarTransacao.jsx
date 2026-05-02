import { useState } from "react";
import { enviarDados } from "../../hooks/useEnviarDados";

export default function FormEnviarTransacao() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("receita");
  const [categoria, setCategoria] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarDados({ descricao, valor, tipo, categoria, dataRegistro });
  };

  return <form onSubmit={handleSubmit} method="POST">
            <p className="form-label">Descrição</p>
            <input type="text" className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <p className="form-label">Valor</p>
            <input type="number" className="form-control" value={valor} onChange={(e) => setValor(parseFloat(e.target.value))} />
            <p className="form-label">Tipo</p>
            <select className="form-control" value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>
            <p className="form-label">Categoria</p>
            <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            <p className="form-label">Data de Registro</p>
            <input type="date" className="form-control" value={dataRegistro} onChange={(e) => setDataRegistro(e.target.value)} />
            <button type="submit" className="btn btn-primary">Enviar Transação</button>
          </form>;
}