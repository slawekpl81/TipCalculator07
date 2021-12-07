import React from 'react';

function TipAmount({tip}) {
    return (
            <div className="tip-amount">
                <div className="label">Tip Amount</div>
                <div className="dollars"><sup>$</sup><span id="tip-amount">{tip.toFixed(2)}</span></div>
            </div>
    );
}

export default TipAmount;