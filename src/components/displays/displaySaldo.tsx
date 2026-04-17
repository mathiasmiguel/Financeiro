interface DisplaySaldoProps {
    saldo: number;
}

export default function DisplaySaldo({ saldo }: DisplaySaldoProps) {

    return (
        <div className="display-saldo">
            <h2>Saldo Atual</h2>
            <p>{`R$ ${saldo.toFixed(2)}`}</p>
        </div>
    );
}