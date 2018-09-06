import React from 'react';
import Userpanel from './Userpanel/Userpanel';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import Aux from '../../hoc/Auxi/Auxi';

import MenuILE from './ilearningEnginesMenu.json';
import MenuALTE from './AdminLTEMenu.json';


const sidebar = () => {

    let menuitems = MenuILE

    return (

        
        <aside className="main-sidebar">
        
            <section className="sidebar">
            
                <Userpanel></Userpanel>

                <Search></Search>
                
                <Aux>
                    <Menu items= {menuitems}></Menu>
                </Aux>
            
            </section>
        
      </aside>
     );
}
 
export default sidebar;