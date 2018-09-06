import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const item = (props) => {
    return ( 
        <li key = {props.item.key} className={props.item.active?"active":""}>
            <Link to={{pathname:props.item.route}}>
                <i className="fa"><FontAwesomeIcon icon={props.item.icon} /></i> 
                <span style={{"paddingLeft":"8px"}}>{props.item.caption}</span>
            </Link>
        </li>
     );
}
 
export default item;