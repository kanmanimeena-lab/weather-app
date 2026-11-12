import { Link }  from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom" 

function Login(props)
{

const navigate = useNavigate()

const [entereduser , setentereduser] = useState("")

const [enteredpassword, setenteredpassword] = useState("")

const [reguser , setreguser] = useState(true)

const users = props.users 


function inputuser(event){

  setentereduser(event.target.value)
}

function inputpassword(event){

  setenteredpassword(event.target.value)
}



function checkuser()
{
  let userfound = false

  console.log(users)

  users.forEach(function(item){

    if(item.username === entereduser && String(item.password) === enteredpassword)
    {
      console.log("Login Successfull")
      userfound = true
      navigate('/landing', {state:{users:entereduser}})
    }

  })

  if(userfound === false){
    console.log("Login Failed")
    setreguser(false)
  }
}


  return(
  
  <>
  
  <div className="bg-black p-10">

    <div className="bg-[#EFEFEF] p-10 border rounded">
      <h1 className="text-3xl font-medium">Hey Hi</h1>

     {
     reguser ?  <p>I help you manage your activities after you login :)
     </p>
      :<p className = "text-red-500">Please Sign Up Before You Login</p>}


    
  <div className = "flex flex-col gap-2 my-2">
      
 <input value = {entereduser} onChange = {inputuser}
      type = "text" placeholder = "user name" className = "w-52 border-black p-1 bg-transparent border rounded-md" /> 

 <input value = {enteredpassword} onChange = {inputpassword}
      type = "password" placeholder = "password" className = "w-52 border-black p-1 bg-transparent border rounded-md" /> 


      <button onClick = {checkuser}
      className = "bg-[#8272DA] w-24 p-1 rounded-md">
      Login</button>

      <p>Already have an account? 
        <Link to = {'signup'} className = "underline">Signup</Link></p>

     </div>


    </div>

  </div>

  </>
)

}



export default Login