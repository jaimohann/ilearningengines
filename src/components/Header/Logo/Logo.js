import React from 'react';
  

const logo = (props) => {

    const collapsed = props.config.collapsed
    const expanded = props.config.expanded
    
    return (  
        <a href="#" className="logo">
            <span className="logo-mini"><b>{collapsed}</b></span>
            <span className="logo-lg"><b>{expanded}</b></span>
            
        </a>
    );
}
 
export default logo;