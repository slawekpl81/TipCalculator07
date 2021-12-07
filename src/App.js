import './styles.css';
import {useState} from "react";
import TipAmount from "./components/TipAmount";
import TotalPerPerson from "./components/TotalPerPerson";
import InputFields from "./components/InputFields";
import BillAmount from "./components/BillAmount";
import NumberOfPeople from "./components/NumberOfPeople";
import TipPercentages from "./components/TipPercentages";

function App() {
    const [people, setPeople] = useState(1);
    const [bill, setBill] = useState(100);
    const [tipPercent, setTipPercent] = useState(15);

    return (
        <div className="wrapper">
            <TipAmount tip={bill * tipPercent / 100}/>
            <TotalPerPerson total={(bill * tipPercent / 100 + bill) / people}/>
            <InputFields>
                <BillAmount bill={bill} setBill={setBill}/>
                <NumberOfPeople people={people} setPeople={setPeople}/>
            </InputFields>
            <TipPercentages percent={tipPercent} setPercent={setTipPercent}/>
        </div>
    );
}

export default App;
