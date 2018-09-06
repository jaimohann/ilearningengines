import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = () => {
    return ( 
        <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa"><FontAwesomeIcon icon={["fas","search"]}  /></i>
                </button>
              </span>
        </div>
      </form>
     );
}
 
export default search;