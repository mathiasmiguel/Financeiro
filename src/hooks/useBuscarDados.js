import { useState, useEffect } from "react";
export function buscarDados() {
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const fetchDados = async () => {
      try {
        setLoading(true);
        const resposta = await fetch("http://localhost:3000/transacoes");
        if (!resposta.ok) {
          throw new Error(`Erro na requisição: ${resposta.statusText}`);
        }
        const dados = await resposta.json();
        setTransacoes(dados);
        setErro(null);
      } catch (e) {
        const mensagemErro = e instanceof Error ? e.message : "Ocorreu um erro desconhecido";
        setErro(mensagemErro);
        console.error("Erro ao buscar dados:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchDados();
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  return {
    transacoes,
    loading,
    erro
  };
}