import React from 'react';  
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
const header = (props) => {

    const logo = props.config.logo;
    const navbar = props.config.navbar;

    return (  
        
        <header className="main-header">
            {logo.required?<Logo config={logo}></Logo>:null}
            
            {navbar.required?<Navbar config={navbar}></Navbar>:null}
        </header>
    );
}
 
export default header;