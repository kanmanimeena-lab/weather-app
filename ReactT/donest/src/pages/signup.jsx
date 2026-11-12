import { Link }  from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)

{

const navigate = useNavigate()
const users = props.users
const setuser = props.setuser



const [entereduser , setentereduser] = useState("")

const [enteredpassword, setenteredpassword] = useState("")

function inputuser(event){

  setentereduser(event.target.value)
}

function inputpassword(event){

  setenteredpassword(event.target.value)
}

function handlingsignup()
{

setuser([...users,{username:entereduser, password:enteredpassword} ])
navigate('/')
}


 return (
  <div className="bg-black p-10">

    <div className="bg-[#EFEFEF] p-10 border rounded">
      <h1 className="text-3xl font-medium">Hey Hi</h1>

      <p>Sign up here :)
     </p>
     
  <div className = "flex flex-col gap-2 my-2">
      
 <input value = {entereduser} onChange = {inputuser}
      type = "text" placeholder = "user name" className = "w-52 border-black p-1 bg-transparent border rounded-md" /> 

 <input value = {enteredpassword} onChange = {inputpassword}
      type = "password" placeholder = "password" className = "w-52 border-black p-1 bg-transparent border rounded-md" /> 

  <input 
      type = "password" placeholder = "confirm password"  className = "w-52 border-black p-1 bg-transparent border rounded-md" /> 

      <button onClick = {handlingsignup}
      className = "bg-[#fff31e] w-24 p-1 rounded-md">
      Signup</button>

      <p>Already have an account? 
        <Link to = {'/'} className = "underline">Login</Link></p>

     </div>


    </div>

  </div>
)

}

export default Signup