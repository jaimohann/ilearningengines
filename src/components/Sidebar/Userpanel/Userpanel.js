import React from 'react';
import user2 from '../../../assets/images/user2-160x160.jpg'

const userpanel = () => {
    return (           
        <div className="user-panel">
            <div className="pull-left image">
                <img src={user2} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
                <p>Demo</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
        </div> 
  );
}
 
export default userpanel;