import logo from "../assets/Logo.png";
import Search from "./search"
import Text from "./weathertext"


function Header()
{


  return(

    <>
    
  <div className="flex items-center  lg:gap-56 w-full px-6 py-4">

      <img
        className="w-28 h-28 object-contain"
        src={logo}
        alt="Skyora"
      />
      
      <div className="w-full max-w-xl">
        <Search />

     </div>

   </div>

<Text />
    </>
  )
}

export default Header