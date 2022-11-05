interface Props {
  name: string
}
const PlaceMenu = ({ name }: Props) => {
  return (
    <div className='w-1000 capitalize text-white grid gap-5 font-exo'>
      {console.log('name', name)}
      <div className="text-xl text-center">{name}</div>
      {/* Buttons Row */}
      <div className="grid grid-cols-3 gap-5 w-full text-center">
        <button className='border w-full rounded-xl lg:text-lg px-5 py-3'>Ride</button>
        <button className='border w-full rounded-xl lg:text-lg px-5 py-3'>Move</button>
        <button className='border w-full rounded-xl lg:text-lg px-5 py-3'>Attack</button>
      </div>
      <div className="grid grid-cols-2 text-center text-lg"> 
        <div className=' '> 1245 ✨</div>
        <div className=' '> 123 🌑</div>
        
      </div>
      <div className="text-center text-lg">owner: 0x1345...abc</div>
    </div>
  )
}

export default PlaceMenu
