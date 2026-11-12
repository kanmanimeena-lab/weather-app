function Todoitem(props)
{

  const activitylist = props.activitylist
  const setactivitylist = props.setactivitylist

  const handlingbutton = (deleteid) =>
  {

    let temparr = activitylist.filter(function(item){

      if(item.id === deleteid){

        return false
      }else{
        return true
      }
    })
setactivitylist(temparr)
  }

  return(
    <div className = "flex flex-row justify-between">
    <p>{props.index + 1}.{props.item.activity}</p>
    <button onClick = {()=> handlingbutton(props.id)}>Delete</button>
    </div>
  )
}
export default Todoitem