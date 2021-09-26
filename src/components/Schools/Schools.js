import React, { useEffect, useState } from 'react';
import Fund from '../FundCalculation/FundCalculation';
import School from '../School/School';
import './Schools.css'

const Schools = () => {
    const [Schools, setSchools] = useState([]);
    const [FundCalculation, setFundCalculation] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setSchools(data))
    }
        , [])

    const handleAddToFundCalculation = (Schools) => {
        const newFundCalculation = [...FundCalculation, Schools];
        setFundCalculation(newFundCalculation);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    Schools.map(Schools => <School
                        key={Schools.key}
                        Schools={Schools}
                        handleAddToFundCalculation={handleAddToFundCalculation}
                    >
                    </School>)
                }

            </div>
            <div className="cart-container">
                <Fund FundCalculation={FundCalculation}></Fund>
            </div>
        </div>
    );
};

export default Schools;
