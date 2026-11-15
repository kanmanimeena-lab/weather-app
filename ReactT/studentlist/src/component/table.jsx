
import { useContext } from "react"
import { StudentContext } from "./studentcontext"

function Table() {
  const { studentlist, setstudentlist } = useContext(StudentContext)

  console.log(studentlist)

  function addhandling(clickedid) {
    const temp = studentlist.map((item) => {
      if (clickedid === item.id) {
        return { ...item, isFavourite: true }
      } else {
        return item
      }
    })

    setstudentlist(temp)
  }

  return (
    <div className="mt-10 overflow-hidden rounded-xl shadow-md">

      <table className="w-full border-collapse text-left">

        <thead className="bg-[#E4F5F4] text-[#12304A]">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Name</th>
            <th className="p-4">Roll Number</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white">

          {studentlist.map((item, index) => (

            <tr key={item.id} className="border-b border-[#D9E7EB]">

              <td className="p-4">{index + 1}</td>

              <td className="p-4">{item.name}</td>

              <td className="p-4">{item.rollnumber}</td>

              <td className="p-4">

                {item.isFavourite ? (

                  <button className="bg-gray-400 text-white px-4 py-2 rounded-lg">
                    Added
                  </button>

                ) : (

                  <button
                    onClick={() => addhandling(item.id)}
                    className="bg-[#087E8B] text-white px-4 py-2 rounded-lg"
                  >
                    Add to Favourite
                  </button>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default Table
