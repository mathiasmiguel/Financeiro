import "./header.css";

export default function Header() {
    const dataAtual = new Date().toLocaleDateString('pt-BR')

    return (
        <div id="header">
            <h1>Dashboard Financeiro</h1>
            <p>{dataAtual}</p>
        </div>
    )
}