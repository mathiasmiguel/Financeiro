import { useState } from "react";

export default function DisplaySaldo({ saldo }) {
    const [showSaldo, setShowSaldo] = useState(true);

    return (
        <div className="display-saldo">
            <h2>Saldo Atual</h2>
            <p>{`R$ ${saldo.toFixed(2)}`}</p>
        </div>
    );
}