import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification/Notification';
import DropdownMenu from '../../../../UI/DropdownMenu/DropdownMenu';
import task from '../Tasks/Task/Task';


const notifications = () => {

    

    const notifications = [
        {key:"ntf1",notification :"5 new members joined today",icon:["fas","users"],textcolor:"text-aqua"},
        {key:"ntf2",notification :"Very long description here that may not fit into the page and may cause design problems",icon:["fas","exclamation-triangle"],textcolor:"text-yellow"},
        {key:"ntf3",notification :"5 new members joined",icon:["fas","users"],textcolor:"text-red"},
        {key:"ntf4",notification :"25 sales made",icon:["fas","shopping-cart"],textcolor:"text-green"},
        {key:"ntf5",notification :"You changed your username",icon:["far","user"],textcolor:"text-red"}
        ]

        

    return ( 

        <DropdownMenu menuclass= "notifications-menu" header="You have {notifications.count} notifications" footer="View all notifications" icon={["far","bell"]} label="label-warning" count={notifications.length}>

            {
                notifications.map((notification) => {
                    return (
                    <Notification key={notification.key} notification={notification.notification} icon={notification.icon} textcolor={notification.textcolor}>
                    </Notification>
                    )
                }
            )
        }

           


        </DropdownMenu>

     
              

     


      
      
     
      
      
     );
    
}
 
export default notifications;