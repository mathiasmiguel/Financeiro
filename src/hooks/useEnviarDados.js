export default async function enviarDados(transacao) {
  try {
    const resposta = await fetch("http://localhost:3000/transacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transacao)
    });
    return resposta.ok;
  } catch (error) {
    return false;
  }
}