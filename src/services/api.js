import { API_URL } from "./transacaoService";
export const transacaoService = {
  // Função para buscar todas
  getTodasTransacoes: async () => {
    const response = await fetch(`${API_URL}/transacoes`);
    if (!response.ok) throw new Error('Erro ao buscar transações');
    return response.json();
  },
  // Você já pode deixar pronto para o futuro:
  getById: async id => {
    const response = await fetch(`${API_URL}/transacoes/${id}`);
    return response.json();
  },
  // Exemplo de POST para seu app de finanças
  createTransacaoNova: async novaTransacao => {
    const response = await fetch(`${API_URL}/transacoes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaTransacao)
    });
    return response.json();
  }
};