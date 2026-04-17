import DisplayExpense from "./displays/displayExpense";
import DisplayIncome from "./displays/displayIncome";
import DisplaySaldo from "./displays/displaySaldo.tsx";
import "./displayTriplo.css";

interface DisplayTriploProps {
    saldo: number;
    despesas: number;
    receitas: number;
}

export default function DisplayTriplo({ saldo, despesas, receitas }: DisplayTriploProps) {
    return (
        <div className="display-triplo">
            <DisplaySaldo saldo={saldo} />
            <DisplayExpense despesas={despesas} />
            <DisplayIncome receitas={receitas} />
        </div>
    );
}