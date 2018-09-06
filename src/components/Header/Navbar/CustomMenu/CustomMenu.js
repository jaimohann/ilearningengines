import React,{Component} from 'react';
import Messages from './Messages/Messages';
import Notifications from './Notifications/Notifications';
import Tasks from './Tasks/Tasks';
import ActiveUser from './ActiveUser/ActiveUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CustomMenu extends Component {

  state = {open:false}

    render() {

      const messages = this.props.config.messages;
      const tasks = this.props.config.tasks;
      const notifications = this.props.config.notifications;
      const activeuser = this.props.config.activeuser;

    return (  
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">

            {messages.required?<Messages></Messages>:null}
            {notifications.required?<Notifications ></Notifications>:null}
            {tasks.required?<Tasks></Tasks>:null}
            {activeuser.required?<ActiveUser ></ActiveUser>:null}

          <li>
            <a href="#" data-toggle="control-sidebar"><FontAwesomeIcon icon={["fas","cogs"]}  /></a>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default CustomMenu;