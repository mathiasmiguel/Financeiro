export default function DisplayExpense({ despesas }) {
    return (
        <div className="card display-expense">
            <h3>Despesas</h3>
            <p>R$ {despesas.toFixed(2)}</p>
        </div>
    )
}