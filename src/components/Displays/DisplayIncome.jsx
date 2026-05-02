export default function DisplayIncome({
  receitas
}) {
  return <div className="col">
      <div className="col card border-income mb-3">
        <div className="card-header fs-5">Receitas</div>
        <div className="card-body text-income">
          <h5 className="card-title">R$ {Number(receitas || 0).toFixed(2)}</h5>
          <p className="card-text small">
            adicionar mudança em comparação ao mes anterior
          </p>
        </div>
      </div>
    </div>;
}