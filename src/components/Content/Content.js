import React from 'react';
import Header from './Header/Header';
import Pages from './Pages/Pages';

const content = () => {
    return (  
        <div className="content-wrapper" style={{minHeight: "580px"}}>
            <Header></Header>
            <Pages></Pages>
        </div>
    );
}
 
export default content; 