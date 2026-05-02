// src/services/transacaoService.js

export const API_URL = 'http://localhost:3000'; // Ajuste para sua porta

export const fetchTransacoes = async () => {
  const response = await fetch(`${API_URL}/transacoes`);
  if (!response.ok) {
    throw new Error('Falha ao carregar transações');
  }
  return response.json();
};