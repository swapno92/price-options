// import React from 'react';
// import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types'
import Feature from '../../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-blue-300 flex flex-col rounded-lg p-4 text-center space-y-5'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='text-start flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded hover:bg-green-900'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;