import Link from "next/link"

export default function Modal(props) {
  return (
    <div id='modal' className='bg-purple-500 text-lg  lg:text-2xl text-white font-exo font-bold fixed left-1/2 transform -translate-x-1/2 grid grid-cols-3 z-50 h-20 lg:w-1/2  w-full rounded-b-xl text-center items-center'>
      <div className=' '> 1245 ✨</div>
      <div className  =' '> 123 🌑</div>
      <Link className=" border border-gray-400 text-base mr-4 rounded-full" href="/admin/addPlace">Add Place</Link>
    </div>
  )
}
