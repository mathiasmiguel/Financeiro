export default function DisplayExpense({
  despesas
}) {
  return <div className="col">
      <div className="col card border-expense mb-3">
        <div className="card-header fs-5">Despesas</div>
        <div className="card-body text-expense">
          <h5 className="card-title">R$ {Number(despesas || 0).toFixed(2)}</h5>
          <p className="card-text small">
            adicionar mudança em comparação ao mes anterior
          </p>
        </div>
      </div>
    </div>;
}