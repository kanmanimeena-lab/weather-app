import { createContext, useState } from "react"


const StudentContext = createContext()

function StudentData({children})
{

  const [studentlist , setstudentlist] = useState([

{
  id : 1,
  name : "Oliver James",
  rollnumber : "S101",
  isFavourite : false
},

{
  id:2,
  name: "Emily Rose",
  rollnumber : "S102",
  isFavourite : false
},

{
  id:3,
  name : "Liam Parker",
  rollnumber : "S103",
  isFavourite : false
},
{
  id:4,
  name:"Sophie Williams",
  rollnumber : "S104",
    isFavourite : false
},
{
  id:5,
  name:"Noah Bennett",
  rollnumber : "S105",
    isFavourite : false
},
{
  id:6,
  name:"Charlotte Miller",
  rollnumber : "S106",
    isFavourite : false
},
{
  id:7,
  name:"Ethan Scott",
  rollnumber : "S107",
    isFavourite : false
},
{
  id:8,
  name:"Olivia Taylor",
  rollnumber : "S108",
    isFavourite : false
},
{
  id:9,
  name:"Jack Wilson",
  rollnumber : "S109",
    isFavourite : false
},
{
  id:10,
  name:"Amelia Clarke",
  rollnumber : "S110",
    isFavourite : false
},
{
  id:11,
  name:"Bellw Starr",
  rollnumber : "S111",
    isFavourite : false
},
{
  id:12,
  name:"Waylon Jennings",
  rollnumber : "S112",
    isFavourite : false
},
{
  id:13,
  name:"Pearl Hart",
  rollnumber : "S113",
    isFavourite : false
},
{
  id:14,
  name:"Calamity Jane",
  rollnumber : "S114",
    isFavourite : false
},

{
  id:15,
  name:"Jesse James",
  rollnumber : "S115",
    isFavourite : false
}


  ])

return(
  <>

<StudentContext.Provider value = {{studentlist, setstudentlist}}>

{children}


</StudentContext.Provider>
  </>
)

}

export default StudentData

export {StudentContext}