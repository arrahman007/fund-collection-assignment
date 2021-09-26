import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './School.css'

const Schools = (props) => {
    // console.log(props);
    const { name, image, totalStudent, headMasterName, address, fundAmount } = props.Schools
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
                <h4 className="product-name" >{name}</h4>
                <p><small>Total Student: {totalStudent}</small></p>
                <h6>Head Master Name: {headMasterName}</h6>
                <p>Addres: {address}</p>
                <p>Donation Amount: {fundAmount}</p>
                <button
                    onClick={() => props.handleAddToFundCalculation(props.School)}
                    className="chose-btn">
                    <FontAwesomeIcon icon={faPlus} /> Chose for Donate</button>
            </div>

        </div>
    );
};

export default Schools;