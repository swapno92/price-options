// import React from 'react';
import PropTypes from 'prop-types'
import { BsPatchCheckFill } from 'react-icons/bs'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center gap-2'>
            <BsPatchCheckFill className='text-fuchsia-600' />
            <p>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;