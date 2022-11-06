import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import { useState } from 'react'
import { type RideState } from './Map'

//type Dictionary = keyof RideState
interface Dictionary {
  noStartPoint: string
  noEndPoint: string
  rideChosen: string
  tooFarFromOrigin: string
  atOrigin: string
  enRoute: string
  arrived: string
}

interface Props {
  rideState: RideState
  startPoint: LatLngTuple
  endPoint: LatLngTuple
}
export default function Modal({
  rideState,
  startPoint,
  endPoint,
  within20m,
  setRideState,
}: Props) {
  const messageDic: Dictionary = {
    noStartPoint: 'Select a start point',
    noEndPoint: 'Select a destination',
    rideChosen: 'Confirm your ride',
    tooFarFromOrigin: 'You are too far from this location',
    atOrigin: 'Touch to start your ride',
    enRoute: 'Follow the route on screen',
    arrived: "You've arrived, touch to finish ride",
  }
  //const [rideState, setRideState] = useState('selectDest')
  let bgColor = 'bg-purple-500'
  let cursor = 'cursor-auto'

  if (rideState === 'noStartPoint' || rideState === 'noEndPoint') {
    bgColor = 'bg-purple-500'
  } else if (rideState === 'rideChosen') {
    bgColor = 'bg-purple-500'
    cursor = 'cursor-pointer'
    console.log('in ride chosen')
  } else if (rideState === 'tooFarFromOrigin') {
    bgColor = 'bg-red-500'
  } else if (rideState === 'atOrigin') {
    bgColor = 'bg-green-500'
    cursor = 'cursor-pointer'
  } else if (rideState === 'enRoute') {
    bgColor = 'bg-yellow-500'
  } else if (rideState === 'arrived') {
    bgColor = 'bg-green-500'
  } else {
    bgColor = 'bg-purple-500'
  }

  return (
    <div
      id='modal'
      className={`${bgColor} ${cursor} fixed left-1/2 bottom-0 z-50 grid h-20 w-full -translate-x-1/2 transform items-center rounded-t-xl bg-purple-500 text-center font-exo text-lg  font-bold text-white lg:w-1/2 lg:text-2xl`}
      onClick={() => {
        if (rideState === 'rideChosen') {
          const closeEnough = within20m()
          if (closeEnough) {
            setRideState('atOrigin')
          } else {
            setRideState('tooFarFromOrigin')
          }
        } else if (rideState === 'atOrigin') {
          setRideState('enRoute')
        }
      }}
    >
      {console.log('rideState', rideState)}
      <p>{messageDic[rideState]}</p>
      {/* {startPoint && (
        <p>
          start Point is: {startPoint[0]}, {startPoint[1]}
        </p>
      )}
      {endPoint && (
        <p>
          end Point is: {endPoint[0]}, {endPoint[1]}
        </p>
      )} */}
    </div>
  )
}
