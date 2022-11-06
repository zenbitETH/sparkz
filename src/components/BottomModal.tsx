import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import { useState } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { type RideState } from './Map'
import sparkZData from '../../artifacts/contracts/Sparkz.sol/SparkZ.json' assert { type: 'json' }

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
  rideStartTime,
  startPointId,
  startPoint,
  endPointId,
  endPoint,
  within20m,
  setRideState,
  setStartTime,
  setRideEndTime,
  routeLength,
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

  const BIKE_SPEED = 6.25856

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
  }
  const rideEndTime = Math.floor(rideStartTime + routeLength / BIKE_SPEED)

  const SendData = async (args) => {
    await usePrepareContractWrite({
      address: '',
      abi: [],
      functionName: 'registerJourney',
      args,
      chainId: 5,
    })
  }

  const payload = [
    1,
    startPointId - 1,
    rideStartTime,
    endPointId - 1,
    rideEndTime,
    parseInt(routeLength),
    parseInt(routeLength),
  ]

  const { config } = usePrepareContractWrite({
    address: '0xd66a0156935684bd2b1Cb6a2aBE9c6B1c26b94CA',
    abi: sparkZData.abi,
    functionName: 'registerJourney',
    args: payload.map((arg) => arg?.toString()),
    chainId: 80001,
  })

  console.log('==============================')
  console.log('==============================')
  console.log('==============================')
  console.log('==============================')
  console.log(payload)

  const {
    data: contractWriteData,
    isLoading: isWriteLoading,
    isSuccess,
    Error,
    write,
  } = useContractWrite(config)
  console.log('')
  return (
    <div
      id='modal'
      className={`${bgColor} ${cursor} fixed left-1/2 bottom-0 z-50 grid h-20 w-full -translate-x-1/2 transform items-center rounded-t-xl bg-purple-500 text-center font-exo text-lg  font-bold text-white lg:w-1/2 lg:text-2xl`}
      onClick={async () => {
        if (rideState === 'rideChosen') {
          const closeEnough = within20m()
          if (closeEnough) {
            setStartTime(Date.now())
            setRideState('atOrigin')
          } else {
            setRideState('tooFarFromOrigin')
          }
        } else if (rideState === 'atOrigin') {
          setRideState('enRoute')
        } else if (rideState === 'enRoute') {
          setRideState('arrived')
          const rideEndTime = Math.floor(
            rideStartTime + routeLength / BIKE_SPEED
          )
          setRideEndTime(rideEndTime)
          console.log('55555555555555555555555555555555555555555555555555')
          console.log('about to write')
          await write?.()
        }
      }}
    >
      {/* {console.log('rideState', rideState)} */}
      <p>{messageDic[rideState]}</p>
    </div>
  )
}
