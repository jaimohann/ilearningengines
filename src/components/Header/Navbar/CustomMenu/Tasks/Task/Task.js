import React from 'react';

const task = (props) => {
    return ( 
        <li>
        <a href="#">
          <h3>
          {props.task}
            <small className="pull-right">{props.percentage}%</small>
          </h3>
          <div className="progress xs">
            <div className={["progress-bar",props.bg].join(' ')} style={{'width': props.percentage +"%"}} role="progressbar"
                 aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100">
              <span className="sr-only">{props.percentage}% Complete</span>
            </div>
          </div>
        </a>
      </li>
     );
}
 
export default task;