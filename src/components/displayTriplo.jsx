import DisplayExpense from "./displays/displayExpense";
import DisplayIncome from "./displays/displayIncome";
import DisplaySaldo from "./displays/displaySaldo";
import "./displayTriplo.css";

export default function DisplayTriplo({ saldo, despesas, receitas }) {

    return (
        <div className="display-triplo">
            <DisplaySaldo saldo={saldo} />
            <DisplayExpense despesas={despesas} />
            <DisplayIncome receitas={receitas} />
        </div>
    );
}