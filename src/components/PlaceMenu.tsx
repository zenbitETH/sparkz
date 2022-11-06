import { LatLng, LatLngTuple } from 'leaflet'
import { useMap } from 'react-leaflet'
import { RideState } from './Map'
// @ts-ignore
import snarkjs from 'snarkjs'
// import fs from 'fs'
import { usePrepareContractWrite } from 'wagmi'
import { locationMapping } from '../constants/constants'
import * as fs from 'fs'

enum JourneyType {
  Ride,
  Move,
  Attack,
}

interface Props {
  name: string
  id: string
  openLatLng: LatLngTuple
  setStartPoint: (latlng: LatLngTuple) => void
  startPoint: LatLngTuple
  setEndPoint: (latlng: LatLngTuple) => void
  endPoint: LatLngTuple
  setRideState: (state: RideState) => void
  setStartPointId: (id: string) => void
  setEndPointId: (id: string) => void
}
const PlaceMenu = ({
  name,
  id,
  openLatLng,
  setStartPointId,
  setStartPoint,
  setEndPoint,
  setEndPointId,
  startPoint,
  setJourney,
  endPoint,
  setRideState,
}: Props) => {
  const map = useMap()
  const handleButtonClick = (journey: number) => {
    //zoom out
    map.setView([37.785910776551354, -122.44279861450197], 13)
    if (!startPoint) {
      setStartPoint(openLatLng)
      setStartPointId(id)
      setRideState('noEndPoint')
    } else if (
      (!endPoint && startPoint[0] !== openLatLng[0]) ||
      startPoint[1] !== openLatLng[1]
    ) {
      setJourney(journey)
      setEndPoint(openLatLng)
      setEndPointId(id)
      setRideState('rideChosen')
    }
  }

  return (
    <div className='w-1000 grid gap-5 font-exo capitalize text-white'>
      <div className='text-center text-xl'>{name}</div>
      {/* Buttons Row */}
      <div className='grid w-full grid-cols-3 gap-5 text-center'>
        <button
          onClick={() => handleButtonClick(0)}
          className='w-full rounded-xl border px-5 py-3 lg:text-lg'
        >
          Ride
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className='w-full rounded-xl border px-5 py-3 lg:text-lg'
        >
          Move
        </button>
        <button
          onClick={() => handleButtonClick(2)}
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
