
import Todoitem from "./todoitem"

function TodoList(props)
{

const activitylist = props.activitylist
const setactivitylist = props.setactivitylist


  return (
<>

    <div className = "bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className = "text-2xl font-medium">Todo List</h1>
    
    {
    activitylist.length === 0 ? <p>You haven't added any activity yet</p> : ""
    }

      {
        activitylist.map(function(item , index){

          return <Todoitem item = {item} index = {index} id={item.id} activitylist = {activitylist} setactivitylist= {setactivitylist}/>
        })
      }
      </div>
</>
  )
}
export default TodoList