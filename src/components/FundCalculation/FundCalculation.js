import React from 'react';
import './FundCalculation.css';

const FundCalculation = (props) => {
    const { FundCalculation } = props;
    let total = 0;
    for (const school of FundCalculation) {
        total = total + school.fundAmount;
    }
    return (
        <div className="summary-area">
            <h3 >Fund Summary</h3>
            <h5>Total Selected Institute: {props.FundCalculation.length}</h5>
            <p>Total Fund Amount: {total}</p>
        </div>
    );
};

export default FundCalculation;