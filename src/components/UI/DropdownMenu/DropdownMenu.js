import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aux from '../../../hoc/Auxi/Auxi';

class DropdownMenu extends Component {

  state = {open:false}

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

toggle = () =>{
  const toggle = this.state.open
  this.setState({open:!toggle})
}

    render()
    {
    return (  
      <Aux>

        <li className={["dropdown",this.props.menuclass,this.state.open?"open":""].join(' ')} onClick={this.toggle}>
        
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      
        <i><FontAwesomeIcon icon={this.props.icon}  /></i>
        <span className={["label", this.props.label].join(' ')}>{this.props.count}</span>

      </a>
        <ul className="dropdown-menu">
        <li className="header">{this.props.header}</li>
        <li>
          
          <ul className="menu">

            {this.props.children}
            
          </ul>
          </li>
          <li className="footer"><a href="#">{this.props.footer}</a></li>
        </ul>
        </li>

        </Aux>
        
    );
  }
}
 
export default DropdownMenu;