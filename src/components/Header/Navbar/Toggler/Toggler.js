import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toggler.css';

class Toggler extends Component {

    state = {expanded:true}

    toggleHandler = () => {
        
        if (this.state.expanded === true)
            document.body.classList.add("sidebar-collapse")
        else
            document.body.classList.remove("sidebar-collapse")

        const currentstate = this.state.expanded
        this.setState({expanded:!currentstate})
        
    }

    render()
    {
    return (  
        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button" 
        onClick = {this.toggleHandler} style={{content:""}}>
             <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
            <i  className="pull-right"><FontAwesomeIcon icon={["fas","bars"]}/></i>
        </a>
    );
}
}
 
export default Toggler;