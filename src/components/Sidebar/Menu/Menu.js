import React,{Component} from 'react';
import Header from './Header/Header';
import GroupItem from './GroupItem/GroupItem';
import Aux from '../../../hoc/Auxi/Auxi';


class Menu extends Component  {

    state = {
        itemstatus : {key:"",status:false}
    }


    toggleHandler = (key) =>{
    {

        if (key === this.state.itemstatus.key)
            this.setState({itemstatus:{key:"",status:false}})
        else
            this.setState({itemstatus:{key:key,status:true}})
        
    }
}
    
render()
{
       


    return (  

        <ul className="sidebar-menu" data-widget="tree">
        {
        this.props.items.map((itm) => {
            
            switch (itm.type)
            {
            case ("header") :
                return <Header key = {itm.key} caption={itm.caption}></Header>
            case ("group") :
            {
                this.thisitem = itm


                itm.key === this.state.itemstatus.key ? itm.active = true:itm.active = false
                itm.key === this.state.itemstatus.key ? itm.open = true:itm.open = false

                return <GroupItem key = {itm.key} item={itm} toggle={this.toggleHandler}></GroupItem>
            }
            default:
                return null
            }
        }

        
        )

        }

        
        </ul>
        
    
    );
}

}
 
export default Menu;