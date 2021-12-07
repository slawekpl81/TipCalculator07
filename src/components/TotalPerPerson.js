import React from 'react';

function TotalPerPerson({total}) {
    return (
        <div className="total-per-person">
            <div className="label">Total Per Person</div>
            <div className="dollars"><sup>$</sup><span id="total-per-person">{total.toFixed(2)}</span></div>
        </div>
    );
}

export default TotalPerPerson;