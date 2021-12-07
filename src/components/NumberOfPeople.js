import React from 'react';

function NumberOfPeople({people,setPeople}) {
    return (
        <div className="number-of-people">
            <div className="slidecontainer">
                <input type="range" min="1" max="10" value={people} className="slider"
                onChange={(event => setPeople(event.target.value))}/>
            </div>
            <div className="field">
                <input type="text" id="number-of-people" name="number-of-people" value={people}/>
            </div>
            <div className="label">Number of People</div>
        </div>
    );
}

export default NumberOfPeople;