import React from 'react';

function BillAmount({bill,setBill}) {
    return (
        <div className="bill-amount">
            <div className="slidecontainer">
                <input type="range" min="1" max="1000" step={.10} value={bill} className="slider"
                onChange={event => setBill(Number(event.target.value))}/>
            </div>
            <div className="field">
                <input type="text" id="bill-amount" name="bill-amount" value={Number(bill).toFixed(2)}/>
            </div>
            <div className="label">Bill Amount</div>
        </div>
    );
}

export default BillAmount;