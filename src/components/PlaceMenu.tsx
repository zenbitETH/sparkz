import { LatLng } from 'leaflet'
import { useMap } from 'react-leaflet'
import { RideState } from './Map'
// @ts-ignore
import snarkjs from 'snarkjs'
import fs from 'fs'

async function validateLocation(locationName: string, latitude: string, longitude: string, range: string) {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      {
        "locationName": locationName,
        "latitude": latitude,
        "longitude": longitude,
        "range": range
    }
      , "../../circuits/LocationProof_js/LocationProof.wasm", "../../circuits/LocationProof_0001.zkey");

    console.log("Proof: ");
    console.log(JSON.stringify(proof, null, 1));
    //@ts-ignore
    const vKey = JSON.parse(fs.readFileSync("../../circuits/verification_key.json"));

    const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Verification OK");
    } else {
        console.log("Invalid proof");
    }

}

interface Props {
  name: string
  openLatLng: LatLng
  setStartPoint: (latlng: LatLng) => void
  startPoint: LatLng
  setEndPoint: (latlng: LatLng) => void
  endPoint: LatLng
  setRideState: (state: RideState) => void
}
const PlaceMenu = ({
  name,
  //setZoom,
  openLatLng,
  setStartPoint,
  setEndPoint,
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
      setRideState('noEndPoint')
    } else if (
      (!endPoint && startPoint[0] !== openLatLng[0]) ||
      startPoint[1] !== openLatLng[1]
    ) {
      setEndPoint(openLatLng)
      setRideState('rideChosen')
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
