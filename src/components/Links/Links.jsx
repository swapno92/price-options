// import React from 'react';
import PropTypes from 'prop-types';

const Links = ({ route }) => {
    console.log(route);
    return (
        <div>
            <li>
                <a className ='hover:bg-yellow-200 p-1 rounded' href={`route.path`}>{route.name}</a>
            </li>
        </div>
    );
}

Links.propTypes = {
    route: PropTypes.object
}

export default Links;