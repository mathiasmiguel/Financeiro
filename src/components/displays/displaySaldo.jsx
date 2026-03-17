import { useState } from "react";

export default function DisplaySaldo({ saldo }) {
    const [showSaldo, setShowSaldo] = useState(true);

    const toggleSaldo = () => {
        setShowSaldo(!showSaldo);
    };

    return (
        <div className="display-saldo">
            <h2>Saldo Atual</h2>
            <p>{showSaldo ? `R$ ${saldo.toFixed(2)}` : '****'}</p>
            <button onClick={toggleSaldo}>
                {showSaldo ? 'Ocultar Saldo' : 'Mostrar Saldo'}
            </button>
        </div>
    );
}