import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from '../Item/Item';
import {Link} from 'react-router-dom'
import './GroupItem.css'

const groupitem = (props) => {
    return (
        <li key ={props.item.key} className={[props.item.active?"active":"", "treeview", props.item.open?"menu-open":"menu-close"].join(' ')} onClick = {() => props.toggle(props.item.key)}>
            <Link to={{pathname:props.item.route}}>
                <i className="fa">
                    <FontAwesomeIcon icon={props.item.icon}/>
                </i> 
                <span style={{"paddingLeft":"8px"}}>{props.item.caption}</span>
                <span className="pull-right-container">
                    {
                        props.item.labels!=null?
                        props.item.labels.map((label) => {
                        return (<span className={["label", label.class, "pull-right"].join(' ')}>{label.caption}</span>)}):
                        <i  className="pull-right"><FontAwesomeIcon icon={["fas","angle-left"]}/></i>
                    }
                </span>
            </Link>
            {
                props.item.children != null?
                <ul className="treeview-menu">
                {
                    props.item.children.map((child,index) => {
                        return (
                            <Item key ={child.key} item={child}></Item>
                        )
                    })
                }
                </ul>
                :null
            }
            
        </li>
    );
}
 
export default groupitem;