import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const header = (props) => {
    return ( 
        <section className="content-header">
        <h1>
          {props.title}
          <small>{props.subtitle}</small>
        </h1>
        <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa">
                    <FontAwesomeIcon icon={["fas","tachometer-alt"]}  />
                </i> 
                Home
                </a>
            </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>
     );
}
 
export default header;