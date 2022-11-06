import Link from 'next/link'

export default function Modal(props) {
  return (
    <div
      id='modal'
      className='fixed left-1/2  z-50 grid h-20 w-full -translate-x-1/2 transform grid-cols-4 items-center rounded-b-xl bg-purple-500 text-center font-exo text-lg  font-bold text-white lg:w-1/2 lg:text-2xl'
    >
      <div className=' '> 1245 ✨</div>
      <div className=' '> 123 🌑</div>
      <Link
        className=' mr-4 rounded-full border border-gray-400 text-base'
        href='/admin/addPlace'
      >
        Add Place
      </Link>
      <Link
        className=' mr-4 rounded-full border border-gray-400 text-base'
        href='/admin/newPlayer'
      >
        Register Player
      </Link>
    </div>
  )
}
