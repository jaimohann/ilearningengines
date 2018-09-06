import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const infoBox = (props) => {
    return ( 
        <div className="info-box">
        <span className={["info-box-icon",props.color].join(' ')}>
            <i className="fa"><FontAwesomeIcon icon={props.icon} /></i> 
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{props.caption}</span>
          <span className="info-box-number">{props.number1}<small>{props.number2}</small></span>
        </div>
        
      </div>
     );
}
 
export default infoBox;