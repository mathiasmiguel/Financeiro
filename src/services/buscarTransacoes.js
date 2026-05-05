import { API_URL } from "./api.js";

export default async function buscarTransacoes() {

    try {
        const resposta = await fetch(API_URL + '/transacoes')
        const transacoes = await resposta.json()

        // console.log(transacoes)

        transacoes.map(transacao => {
            transacao.valor = Number(transacao.valor)
            transacao.data = new Date(transacao.data)
            transacao.tipo = transacao.tipo.charAt(0).toUpperCase() + transacao.tipo.slice(1)
        })

        return transacoes
    }
    catch (erro) {
        console.log('Erro ao buscar transações.', erro)
    }
}