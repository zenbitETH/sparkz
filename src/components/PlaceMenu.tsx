import { LatLng, LatLngTuple } from 'leaflet'
import { useMap } from 'react-leaflet'
import { RideState } from './Map'
import { usePrepareContractWrite } from 'wagmi'
import { locationMapping } from '../constants/constants'
import verificationJson from '../constants/verification_key.json' assert { type: 'json' }
import { useState } from 'react'

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
  setJourney: (journey: number) => void
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
  const [message, setMessage] = useState<String>('')
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

  const handleRideButtonClick = async (journey: number) => {
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
    let locationHash
    const latitude = (Math.abs(openLatLng[0]) * 100000).toFixed(0).toString()
    const longitude = (Math.abs(openLatLng[1]) * 100000).toFixed(0).toString()
    for (const mapping of Object.keys(locationMapping)) {
      // @ts-ignore
      if (
        locationMapping[mapping].lat === latitude &&
        locationMapping[mapping].long === longitude
      ) {
        locationHash = mapping
        break
      }
    }
    console.log('asdawdaw', latitude, longitude, locationHash)
    if (!locationHash) {
      throw new Error('Could not find location hash')
    }
    setMessage('Generating proof...')
    const result = await validateLocation(locationHash, latitude, longitude)
  }

  const validateLocation = async (
    locationName: string,
    latitude: string,
    longitude: string
  ) => {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      {
        locationName: locationName,
        latitude: latitude,
        longitude: longitude,
        range: '100',
      },
      '/LocationProof.wasm',
      '/LocationProof_0001.zkey'
    )

    console.log('Proof: ')

    await new Promise((resolve) => setTimeout(() => resolve('Done'), 3000))
    setMessage('Verifying proof...')
    //@ts-ignore
    const vKey = verificationJson

    const res = await snarkjs.groth16.verify(vKey, publicSignals, proof)
    console.log('the result', res)
    setMessage('Proof verifed ✅')
    setTimeout(() => setMessage(''), 3000)
    console.log(JSON.stringify(proof, null, 1))
  }

  return (
    <>
      <div className='w-1000 grid gap-5 font-exo capitalize text-white'>
        <div className='text-center text-xl'>{name}</div>
        {/* Buttons Row */}
        <div className='grid w-full grid-cols-3 gap-5 text-center'>
          <button
            onClick={()=>handleRideButtonClick(0)}
            className='w-full rounded-xl border px-5 py-3 lg:text-lg'
          >
            Ride
          </button>
          <button
            onClick={()=>handleButtonClick(1)}
            className='w-full rounded-xl border px-5 py-3 lg:text-lg'
          >
            Move
          </button>
          <button
            onClick={()=>handleButtonClick(2)}
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
      {message && message.length && (
        <div className='right-30 z-100 absolute top-80 rounded-full border border-purple-500 bg-purple-200 p-10 text-lg text-black'>
          {message}
        </div>
      )}
    </>
  )
}

export default PlaceMenu
