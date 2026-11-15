import Table from "./table"
import { Users } from "lucide-react"

function Student()
{


 return (
  

  <div className="bg-[#F5FAFC] min-h-screen p-6">

    <div className="flex items-center gap-3 mb-5">

      <Users size={30} color="#12304A" />

      <h2 className="text-[#12304A] font-bold text-2xl">
        Student List
      </h2>
</div>
<p className = "text-[#087E8B] mt-0">Browse all students and add them to your favourite </p>

   <Table />

  </div>

);
  
}
export default Student