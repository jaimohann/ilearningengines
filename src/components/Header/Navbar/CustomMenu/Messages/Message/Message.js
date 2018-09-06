import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const message = (props) => {
    return ( 
        <li>
        <a href="#">
          <div className="pull-left">
            <img src={props.image} className="img-circle" alt="User Image"/>
          </div>
          <h4>
            {props.from}
            <small><i><FontAwesomeIcon icon={["far","clock"]}  /></i> {props.recievedate}</small>
          </h4>
          <p>{props.subject}</p>
        </a>
      </li>
     
     );
}
 
export default message;

