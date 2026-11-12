import {useState} from "react"

function Todoform(props)

{

  const activitylist = props.activitylist
const setactivitylist = props.setactivitylist


const [newactivity , setnewactivity] = useState("") 

const funlist = (event) =>
{

  setnewactivity(event.target.value)

}

const addhandling = () =>
{

setactivitylist([...activitylist, {id:activitylist.length + 1 , activity: newactivity}])
setnewactivity("");

}

  return (
    <>
<div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">
        Manage Activities
      </h1>

      <div className="flex gap-2">
        <input value = {newactivity} onChange = {funlist}
          type="text"
          className="border border-black bg-transparent"
          placeholder="Next Activity?"
        />

        <button onClick = {addhandling} 
        className="bg-black text-white border border-black px-4 py-2">
          Add
        </button>
      </div>
    </div>

    </>
  )

}

export default Todoform