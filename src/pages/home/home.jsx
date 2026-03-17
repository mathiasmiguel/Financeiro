import DisplayTriplo from '../../components/displayTriplo'  
import Header from '../../components/header'
import './home.css' 

export default function home() {
    console.clear()
    return (
        <>
            <header>
                <Header />
                <DisplayTriplo saldo={0} despesas={0} receitas={0} />
            </header>
        </>
    )
}
