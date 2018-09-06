import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import user2 from '../../../../../assets/images/user2-160x160.jpg';

class ActiveUser extends Component {

  state = {open:false}

  toggle = () =>{
    const toggle = this.state.open
    this.setState({open:!toggle})
  }

componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
}

componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
}

handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
        this.setState({
            open : false
        });
    }
}

  render()
  {
    return ( 
        <li className={["dropdown","user-menu",this.state.open?"open":""].join(' ')} onClick={this.toggle}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          
          <img src={user2} className="user-image" alt="User Image"/>
          <span className="hidden-xs">Demo</span>
        </a>
        <ul className="dropdown-menu">
          
          <li className="user-header">
            <img src={user2} className="img-circle" />
            
            <p>
              Demo - demo@ilearningengines.com
              <small>Member since Nov. 2017</small>
            </p>
          </li>

         
        
          <li className="user-body">
            <div className="row">
              <div className="col-xs-4 text-center">
                <a href="#">Curriculums</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Modules</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Trainers</a>
              </div>
            </div>
            
          </li>
          
          <li className="user-footer">
            <div className="pull-left">
              <a href="#" className="btn btn-default btn-flat">Profile</a>
            </div>
            <div className="pull-right">
              <a href="#" className="btn btn-default btn-flat">Sign out</a>
            </div>
          </li>
        </ul>
      </li>
     );
    }
}
 
export default ActiveUser;