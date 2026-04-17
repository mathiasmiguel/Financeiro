interface DisplayIncomeProps {
    receitas: number;
}

export default function DisplayIncome({ receitas }: DisplayIncomeProps) {
    return (
        <div className="card display-income">
            <h3>Receitas</h3>
            <p>R$ {receitas.toFixed(2)}</p>
        </div>
    )
}