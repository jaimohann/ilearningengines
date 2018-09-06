import React from 'react';
import Toggler from './Toggler/Toggler';
import CustomMenu from './CustomMenu/CustomMenu';
const navbar = (props) => {

    const toggler = props.config.toggler;
    const custommenu = props.config.custommenu

    return (  
        <nav className="navbar navbar-static-top">
            {toggler.required?<Toggler config={toggler}></Toggler>:null}
            {custommenu.required?<CustomMenu config={custommenu}></CustomMenu>:null}
        </nav>
    );
}
 
export default navbar;