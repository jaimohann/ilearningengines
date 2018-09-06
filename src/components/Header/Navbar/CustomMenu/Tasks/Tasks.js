import React from 'react';

import Task from './Task/Task';
import DropdownMenu from '../../../../UI/DropdownMenu/DropdownMenu';


const tasks = () =>  {

    

    const tasks = [
        {key:"tsk1",percentage:"20", task:"Design some buttons", bg:"progress-bar-aqua"},
        {key:"tsk2",percentage:"40", task:"Create a nice theme", bg:"progress-bar-green"},
        {key:"tsk3",percentage:"60", task:"Some task I need to do", bg:"progress-bar-red"},
        {key:"tsk4",percentage:"80", task:"Make beautiful transitions", bg:"progress-bar-yellow"}
    ]

    return ( 

        <DropdownMenu  menuclass= "tasks-menu" header="You have 9 tasks" footer="View all tasks" icon={["far","flag"]} label="label-danger" count={tasks.length}>
        
        {tasks.map((task) => {
            return (
            <Task key={task.key} task={task.task} bg = {task.bg} percentage ={task.percentage} >
            </Task>
            )
        }
    )
    }
        </DropdownMenu>

   


     );
    }
 
export default tasks;