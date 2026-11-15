import star from "../assets/star.png"
import List from "./list"
import golden from "../assets/golden.png"
import { useContext } from "react"
import {StudentContext } from "../component/studentcontext"

function Favouritestudent()
{

const {studentlist , setstudentlist} = useContext(StudentContext)

const templist = studentlist.filter((item) => {

  return item.isFavourite === true

})

const total = templist.length

return(
<>

<div className="bg-[#F5FAFC] min-h-screen p-6">

    <div className="flex items-center gap-3 mb-5 justify-between">
<div>
 <img className = "w-8 h-8"
 
 src = {star} alt = "star" />
      <h2 className="text-[#12304A] font-bold text-2xl">
        Student List
      </h2>
</div>
<div className="bg-[#d9f3f5] p-2 px-7 rounded-xl relative mr-3">

  <h2 className="text-[#087E8B] font-bold text-xl ml-3">
    Total : {total}
  </h2>

    <img
        className="w-5 h-5 absolute left-2 top-3"
        src={golden}
        alt="Favourite star"/>
</div>
</div>

<p className = "text-[#087E8B] ">Your selected Favourite Students</p>

<List  />
  </div>



</>
)

}

export default Favouritestudent

