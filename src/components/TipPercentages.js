import React from 'react';

function TipPercentages({percent, setPercent}) {
    const percentages = [5, 10, 15, 20];
    return (
        <div className="tip-percentages">
            {percentages.map(item => (
                <div key={item}>
                    <input type="radio" name="tip" value={item} id={`percent${item}`}
                           checked={(item === percent)}
                           onClick={() => setPercent(Number(item))}/>
                    <label htmlFor={`percent${item}`}>
                        {item}%
                    </label>
                </div>
            ))}
        </div>
    );
}

export default TipPercentages;