import { LatLng, LatLngTuple } from 'leaflet'
import { useMap } from 'react-leaflet'
import { RideState } from './Map'
// @ts-ignore
import snarkjs from 'snarkjs'
// import fs from 'fs'
import { usePrepareContractWrite } from 'wagmi'
import { locationMapping } from '../constants/constants'
import * as fs from 'fs';

enum JourneyType {
  Ride,
  Move,
  Attack,
}

// async function validateLocation(locationName: string, latitude: string, longitude: string) : Promise<boolean> {
//     const { proof, publicSignals } = await snarkjs.groth16.fullProve(
//       {
//         "locationName": locationName,
//         "latitude": latitude,
//         "longitude": longitude,
//         "range": '100'
//     }
//       , "../../circuits/LocationProof_js/LocationProof.wasm", "../../circuits/LocationProof_0000.zkey");

//     console.log("Proof: ");
//     console.log(JSON.stringify(proof, null, 1));
//     //@ts-ignore
//     const vKey = JSON.parse(fs.readFileSync("../../circuits/verification_key.json"));

//     const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);

//     if (res === true) {
//       return true
//     } else {
//       return false
//     }

// }

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

  endPoint,
  setRideState,
}: Props) => {
  const map = useMap()
  const handleButtonClick = () => {
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
      setEndPoint(openLatLng)
      setEndPointId(id)
      setRideState('rideChosen')
    }
  }

  const handleRideButtonClick = async () => {
    //zoom out
    map.setView([37.785910776551354, -122.44279861450197], 13)
    if (!startPoint) {
      setStartPoint(openLatLng)
      setRideState('noEndPoint')
    } else if (
      (!endPoint && startPoint[0] !== openLatLng[0]) ||
      startPoint[1] !== openLatLng[1]
    ) {
      setEndPoint(openLatLng)
      setRideState('rideChosen')
    }
    let locationHash
    const latitude = openLatLng[0] * 100000
    const longitude = openLatLng[1] * 100000
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
    // if (!locationHash) {
    //   throw new Error('Could not find location hash')
    // }
    // const result = await validateLocation(locationHash, latitude.toString(), longitude.toString())
    const result = true
    if (result) {
      console.log('You are verified')
    } else {
      console.log('You are not verified')
    }
  }

  const handleRideButtonClick = async () => {
    //zoom out
    map.setView([37.785910776551354, -122.44279861450197], 13)
    if (!startPoint) {
      setStartPoint(openLatLng)
      setRideState('noEndPoint')
    } else if (
      (!endPoint && startPoint[0] !== openLatLng[0]) ||
      startPoint[1] !== openLatLng[1]
    ) {
      setEndPoint(openLatLng)
      setRideState('rideChosen')
    }
    let locationHash
    const latitude = openLatLng[0] * 100000
    const longitude = openLatLng[1] * 100000
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
    if (!locationHash) {
      throw new Error('Could not find location hash')
    }
    // const result = await validateLocation(locationHash, latitude.toString(), longitude.toString())
    const result = true
    if (result) {
      console.log('You are verified')
    } else {
      console.log('You are not verified')
    }
  }

  const handleConfirmRideButtonClick = async () => {
    const args = [
      0,
      1,
      new Date().toISOString(),
      2,
      new Date().toISOString(),
      0,
      0,
    ]
    const result = await usePrepareContractWrite({
      address: '',
      abi: [],
      functionName: 'registerJourney',
      args,
      chainId: 5,
    })
  }

  return (
    <div className='w-1000 grid gap-5 font-exo capitalize text-white'>
      <div className='text-center text-xl'>{name}</div>
      {/* Buttons Row */}
      <div className='grid w-full grid-cols-3 gap-5 text-center'>
        <button
          onClick={handleRideButtonClick}
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
