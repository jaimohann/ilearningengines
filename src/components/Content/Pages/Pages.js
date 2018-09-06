import React from 'react';

import {Route} from 'react-router-dom'
import Trainee from './Trainee/Trainee'
import Dashboard from './Dashboard/Dashboard'
const pages = () => {
    return ( 
        <section className="content">
            
                <Route path="/Dashboard" render={Dashboard}></Route>
                <Route path="/Trainee" render={Trainee}></Route>
            
        </section>

     );
}
 
export default pages;