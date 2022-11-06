import Link from 'next/link'
import { useState } from 'react'

interface Dictionary {
  selectDest: string
  confirmRide: string
  tooFar: string
  atOrigin: string
  enRoute: string
  arrived: string
}
export default function Modal(props) {
  const messageDic: Dictionary = {
    selectDest: 'Select a destination',
    confirmRide: 'Confirm your ride',
    tooFar: 'You are too far from this location',
    atOrigin: 'Touch to start your ride',
    enRoute: 'Follow the route on screen',
    arrived: "You've arrived, touch to finish ride",
  }
  const [rideState, setRideState] = useState('selectDest')
  return (
    <div
      id='modal'
      className='fixed left-1/2  bottom-0 z-50 grid h-20 w-full -translate-x-1/2 transform items-center rounded-t-xl bg-purple-500 text-center font-exo text-lg  font-bold text-white lg:w-1/2 lg:text-2xl'
    >
      <p>{messageDic[rideState]}</p>
    </div>
  )
}
