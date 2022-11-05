interface Props {
  name: string
}
const PlaceMenu = ({ name }: Props) => {
  return (
    <div className='w-1000 capitalize text-white'>
      {console.log('name', name)}
      <h2>{name}</h2>
      {/* Buttons Row */}
      <div>
        <button className='border'>Ride</button>
        <button className='border'>Move</button>
        <button className='border'>Attack</button>
      </div>
      <button>click me</button>
    </div>
  )
}

export default PlaceMenu
