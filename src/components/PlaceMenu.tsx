import { useMap } from 'react-leaflet'

interface Props {
  name: string
  setZoom: (z: number) => void
}
const PlaceMenu = ({
  name,
  setZoom,
  openLatLng,
  setStartPoint,
  setEndPoint,
  startPoint,
  endPoint,
}: Props) => {
  const map = useMap()
  const handleButtonClick = () => {
    map.setView([37.785910776551354, -122.44279861450197], 13)
    if (!startPoint) {
      setStartPoint(openLatLng)
    } else if (!endPoint) {
      setEndPoint(openLatLng)
    }
  }
  return (
    <div className='w-1000 grid gap-5 font-exo capitalize text-white'>
      <div className='text-center text-xl'>{name}</div>
      {/* Buttons Row */}
      <div className='grid w-full grid-cols-3 gap-5 text-center'>
        <button
          onClick={handleButtonClick}
          className='w-full rounded-xl border px-5 py-3 lg:text-lg'
        >
          Ride
        </button>
        <button
          onClick={handleButtonClick}
          className='w-full rounded-xl border px-5 py-3 lg:text-lg'
        >
          Move
        </button>
        <button
          onClick={handleButtonClick}
          className='w-full rounded-xl border px-5 py-3 lg:text-lg'
        >
          Attack
        </button>
      </div>
      <div className='grid grid-cols-2 text-center text-lg'>
        <div className=' '> 1245 ✨</div>
        <div className=' '> 123 🌑</div>
      </div>
      <div className='text-center text-lg'>owner: 0x1345...abc</div>
    </div>
  )
}

export default PlaceMenu
