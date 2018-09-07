import React from 'react';

import {Route} from 'react-router-dom'
import Trainee from './Trainee/Trainee'
import Dashboard from './Dashboard/Dashboard'
const pages = () => {
    return ( 
        <section className="content">
            
                <Route path="/" exact render={Dashboard}></Route>
                <Route path="/Trainee" exact render={Trainee}></Route>
            
        </section>

     );
}
 
export default pages;