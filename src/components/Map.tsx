import {
  MapContainer,
  TileLayer,
  Popup,
  GeoJSON,
  Marker,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import BottomModal from './BottomModal'
import { useRef, useState } from 'react'
import {
  useAccount,
  useConnect,
  useNetwork,
  useSignMessage,
  useEnsAvatar,
  useEnsName,
  useDisconnect
} from 'wagmi'
import { useRouter } from 'next/router'
import { GestureHandling } from 'leaflet-gesture-handling'
import userMarkerImg from '../../public/user-marker.png'
import RoutineMachine from './RoutineMachine'

import TopModal from './TopModal'

import PlaceMenu from './PlaceMenu'
import { XIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import Loading from '../components/Loading'

import locs from '../../locations.json' assert { type: 'json' }
const side = 50
var userIcon = new L.Icon({
  iconUrl: '/user-marker.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [side, side],
  iconAnchor: [side / 2, side / 2],
  popupAnchor: [0, -side / 2],
  shadowSize: [41, 41],
})
export type RideState =
  | 'noStartPoint'
  | 'noEndPoint'
  | 'rideChosen'
  | 'tooFarFromOrigin'
  | 'atOrigin'
  | 'enRoute'
  | 'arrived'

const Map = () => {
  const router = useRouter()
  const [openMarkerPosition, setOpenMarkerPosition] =
    useState<LatLngTuple | null>(null)
  const [startPoint, setStartPoint] = useState<LatLngTuple | null>(null)
  const [endPoint, setEndPoint] = useState<LatLngTuple | null>(null)
  const [rideState, setRideState] = useState<RideState>('noStartPoint')
  const [rideStartTime, setRideStartTime] = useState<number | null>(null)
  const [rideEndTime, setRideEndTime] = useState<number | null>(null)

  const [routeLength, setRouteLength] = useState<number | null>(null)
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const GestureHandlingSetter = () => {
    /* eslint-disable */
    const map = useMap() as any
    map.gestureHandling.enable()
    map.addHandler('gestureHandling', GestureHandling)
    //setInit(false)
    /* eslint-enable */
    return null
  }

  const [loc, setLoc] = React.useState<LatLngTuple | null>(null)

  const markerRef = useRef(null)

  const onClickShowMarker = () => {
    // const map = mapRef.current
    // if (!map) {
    //   return
    // }
    // map.flyTo(MARKER_POSITION, 13)
    const marker = markerRef.current
    // if (marker) {
    //   for (const key in marker) {
    //     console.log(key)
    //     console.log(marker[key])
    //     or
    //     marker[key].valueOf()
    //   }
    //console.log(marker.isPopupOpen())
    marker.togglePopup()
  }

  // calculate whether the users postion is within 20m of the start point
  const within20m = () => {
    if (startPoint && position) {
      const dist = Math.sqrt(
        (startPoint[0] - position[0]) ** 2 + (startPoint[1] - position[1]) ** 2
      )
      //if (dist < 0.0002) {
      if (dist < 0.02) {
        return true
      }
      return false
    }
    throw new Error('startPoint or position is null')
  }
  console.log('routeLength', routeLength)
  console.log('endTime', rideEndTime)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const latLong = [latitude, longitude] as LatLngTuple
        setLoc(latLong)
        //console.log(latLong)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  if (!loc) {
    return <Loading />
  }
  
  return (
    <div>
      <MapContainer
        className='fixed h-full w-full'
        center={loc!}
        zoom={19}
        scrollWheelZoom={false}
      >
        <GestureHandlingSetter />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <div className='userLocMarker'>
          <Marker position={loc!} icon={userIcon} ref={markerRef}>
            <Popup className='userLocPopUp'>
              <PlaceMenu />
            </Popup>
          </Marker>
        </div>
        {locs.map((loc) => {
          const position = [loc.lat, loc.lon] as LatLngTuple
          const icon = new L.Icon({
            iconUrl: loc.img,
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [side, side],
            iconAnchor: [side / 2, side / 2],
            popupAnchor: [0, -side / 2],
            shadowSize: [41, 41],
          })

          return (
            <Marker
              icon={icon}
              position={position}
              key={loc.name}
              eventHandlers={{
                click: ({ latlng: { lat, lng } }) => {
                  setOpenMarkerPosition([lat, lng])
                  //console.log('e from marker', e)
                },
                // click: ({ latlng: { lat, lng } }) => {
                //   setStartPoint([lat, lng])
                //   //console.log('lat', lat)
                //   //console.log('lng', lng)
                // },
              }}
            >
              <Popup
                eventHandlers={{
                  click: (e) => {
                    console.log('e.popup', e.popup)
                    //setStartPoint([lat, lng])
                    //console.log('lat', lat)
                    //console.log('lng', lng)
                  },
                }}
              >
                <PlaceMenu
                  name={loc.name}
                  openLatLng={openMarkerPosition}
                  setStartPoint={setStartPoint}
                  startPoint={startPoint}
                  setEndPoint={setEndPoint}
                  endPoint={endPoint}
                  setRideState={setRideState}
                />
              </Popup>
            </Marker>
          )
        })}
        {startPoint && endPoint && (
          <RoutineMachine
            startPoint={startPoint}
            endPoint={endPoint}
            setRouteLength={setRouteLength}
          />
        )}
      </MapContainer>
      <TopModal handleMarker={onClickShowMarker} />
      {address?.length && (
        <button
          className='align-center fixed top-2 right-2 flex h-12 flex-row justify-center rounded-full border border-gray-400 bg-purple-400 p-4 text-center text-xs text-white'
          onClick={() => {
            disconnect()
            router.replace('/home')
          }}
        >
          <div>{shortHandAddress(address!)}</div>
          <XIcon className='my-auto ml-1 h-3 w-3' />
        </button>
      )}
      <BottomModal
        rideState={rideState}
        startPoint={startPoint}
        endPoint={endPoint}
        within20m={within20m}
        setRideState={setRideState}
        setStartTime={setRideStartTime}
        setRideEndTime={setRideEndTime}
        rideStartTime={rideStartTime}
        routeLength={routeLength}
      />
    </div>
  )
}

// const messageDic: Dictionary = {
//   selectDest: 'Select a destination',
//   confirmRide: 'Confirm your ride',
//   tooFar: 'You are too far from this location',
//   atOrigin: 'Touch to start your ride',
//   enRoute: 'Follow the route on screen',
//   arrived: "You've arrived, touch to finish ride",
// }

function shortHandAddress(address: string) {
  if (address?.length) {
    return `${address.substring(0, 5)}...${address.substring(
      address.length - 6,
      address.length
    )}`
  }
  return ''
}

export default Map
