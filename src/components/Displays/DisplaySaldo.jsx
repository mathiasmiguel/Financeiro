export default function DisplaySaldo({
  saldo
}) {
  return <div className="col">
    <div className="card border-saldo mb-3">
      <div className="card-header fs-5">Saldo</div>
      <div className="card-body text-saldo">
        <h5 className="card-title">R$ {Number(saldo || 0).toFixed(2)}</h5>
        <p className={`card-text small text-${saldo >= 0 ? 'income' : 'expense'}`}>
          adicionar mudança em comparação ao mes anterior
        </p>
      </div>
    </div>
    </div>;
}