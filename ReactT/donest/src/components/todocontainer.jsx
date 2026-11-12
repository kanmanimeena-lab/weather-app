import Todoform from './todoform'
import TodoList from './todolist'
import {useState} from "react"
function Container()
{

  const [activitylist , setactivitylist] = useState([

  {
    
    id:1,
    activity:"Have a Tea"
  },

  {
    id:2,
    activity : "Go for a walk"
  }

])

return (
  <div>

    <div className = "flex gap-5 flex-wrap">

   <Todoform activitylist ={activitylist} setactivitylist = {setactivitylist} />

  <TodoList activitylist = {activitylist} setactivitylist = {setactivitylist}/>

</div>
  </div>
);
}

export default Container