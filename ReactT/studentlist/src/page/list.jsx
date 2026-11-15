import { Trash } from "lucide-react"
import golden from "../assets/golden.png"
import { useContext } from "react"
import { StudentContext } from "../component/studentcontext"

function List()
{
const {studentlist , setstudentlist} = useContext(StudentContext)

const templist = studentlist.filter((item) =>{

return item.isFavourite === true


})

const removehandling = (removeid) =>{

  const tempremove = studentlist.map((item) => {

 if(removeid === item.id){

  return {...item, isFavourite : false}

 }

 return item

  })
setstudentlist(tempremove)
}
  
 

return (

<div className="flex flex-wrap gap-5 mt-5">

    {templist.map((item) => {
      return (


        <div key={item.id}>

          <div className="bg-white w-60 h-36 mt-5 rounded-xl shadow-md border border-[#D9E7EB]">
          <div className="flex flex-col items-center justify-center relative h-full gap-2">

            <h1 className="font-bold text-xl text-[#12304A] mt-3">
              {item.name}
            </h1>

            <p className="text-[#087E8B] font-medium">
              {item.rollnumber}
            </p>

            <button onClick = {() => removehandling(item.id)}
            className="flex items-center justify-center gap-2 bg-[#E76F75] text-white px-4 py-2 rounded-lg hover:bg-[#D95760] transition">
              <Trash size={18} />
              Remove
            </button>

            <img
              className="w-8 h-8 absolute right-2 top-2"
              src={golden}
              alt="Favourite star"
            />
        </div>
          </div>

        </div>
      )
    })}

  </div>
)
}

export default List

