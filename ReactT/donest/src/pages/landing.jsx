import Header from "../components/header"
import Card from "../components/card"
import Container from "../components/todocontainer"

import { useLocation } from "react-router-dom"

function Landing()
{

 const data = useLocation()

console.log(data.state.users)

   return(
   <>

<div className = "bg-[black] p-16">

  {/* Header */}


<div className = "bg-[#EfEFEF] p-10 border rounded-md">

  

<Header username={data.state.users}/>

{/* Card */}

<div className = "flex flex-row justify-between gap-7 my-5 flex-wrap">

<Card bgcolor = {"#8272DA"} title = {"23"} subtitle = {"Chennai"}/>

<Card bgcolor = {"#FD6663"} title = {"December"} subtitle = {"17.03"}/>

<Card bgcolor = {"#FCA201"} title = {"Build Using"} subtitle = {"React"}/>

</div>
<div>

{/*todocontainet*/}
<Container />



</div>
</div>

</div>

</>
    
  )
}
export default Landing