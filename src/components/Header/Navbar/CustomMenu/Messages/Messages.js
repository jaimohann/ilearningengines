import React from 'react';

import Message from './Message/Message';
import DropdownMenu from '../../../../UI/DropdownMenu/DropdownMenu';
import user1 from '../../../../../assets/images/user1-128x128.jpg';
import user3 from '../../../../../assets/images/user3-128x128.jpg';
import user4 from '../../../../../assets/images/user4-128x128.jpg';
import user5 from '../../../../../assets/images/user5-128x128.jpg';
import user6 from '../../../../../assets/images/user6-128x128.jpg';



const messages = () => {



    const messages = [
        {key:"msg1",subject :"Why not buy a new awesome theme?", from :"Support Team", recievedate : "5 mins", user:user1},
        {key:"msg2",subject :"Why not buy a new awesome theme?", from :"AdminLTE Design Team", recievedate : "2 hours", user:user3},
        {key:"msg3",subject :"Why not buy a new awesome theme?", from :"Developers", recievedate : "Today", user:user4},
        {key:"msg4",subject :"Why not buy a new awesome theme?", from :"Sales Department", recievedate : "Yesterday", user:user5},
        {key:"msg5",subject :"Why not buy a new awesome theme?", from :"Reviewers", recievedate : "2 days", user:user6}
    ]

    
    return (  

        <DropdownMenu  menuclass= "messages-menu" header="You have 4 messages" footer="See All Messages" icon={["far","envelope"]} label="label-success" count={messages.length} >

            {messages.map((message) => {
            return (
            <Message key={message.key} image={message.user} subject = {message.subject} from ={message.from} recievedate = {message.recievedate}>
            </Message>
            )
        }
    )
    }
        

               

        </DropdownMenu>

      
        

      
    );

}
 
export default messages;