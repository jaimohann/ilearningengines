import React from 'react';  
import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import Controlbar from '../../components/Controlbar/Controlbar';
import Aux from '../Auxi/Auxi';
import Content from '../../components/Content/Content';

const layout = (props) => {

    const header = props.config.header;
    const footer = props.config.footer;
    const navigation = props.config.navigation;
    const controlbar = props.config.controlbar;

    return (  
        <Aux>
            
                {header.required?<Header config={header}></Header>:null}
                {navigation.required?<Sidebar config={navigation}></Sidebar>:null}
                <Content></Content>
                {footer.required?<Footer config={footer}></Footer>:null}
                {controlbar.required?<Controlbar config={controlbar}></Controlbar>:null}
            
        </Aux>
    );
}
 
export default layout;