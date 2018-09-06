import React from 'react';

const header = (props) => {
    return (          
    <li key={props.ky} className="header">
        {props.caption}
    </li>
);
}
 
export default header;