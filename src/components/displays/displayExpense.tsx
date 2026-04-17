interface DisplayExpenseProps {
    despesas: number;
}

export default function DisplayExpense({ despesas }: DisplayExpenseProps) {
    return (
        <div className="card display-expense">
            <h3>Despesas</h3>
            <p>R$ {despesas.toFixed(2)}</p>
        </div>
    )
}