import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const notification = (props) => {
    return (               
    <li>
        <a href="#">
            <i className={props.textcolor}><FontAwesomeIcon icon={props.icon}  /></i> {props.notification}
        </a>
    </li>
      );
}
 
export default notification;