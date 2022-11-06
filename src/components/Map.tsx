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
  useDisconnect,
} from 'wagmi'
import { useRouter } from 'next/router'
import { GestureHandling } from 'leaflet-gesture-handling'
import userMarkerImg from '../../public/user-marker.png'

import TopModal from './TopModal'

import PlaceMenu from './PlaceMenu'
import { XIcon } from '@heroicons/react/solid'

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

const Map = ({ position }: { position: LatLngTuple }) => {
  const router = useRouter()
  const [openMarkerPosition, setOpenMarkerPosition] =
    useState<LatLngTuple | null>(null)
  const [startPoint, setStartPoint] = useState<LatLngTuple | null>(null)
  const [endPoint, setEndPoint] = useState<LatLngTuple | null>(null)
  const [rideState, setRideState] = useState<
    | 'selectDest'
    | 'confirmRide'
    | 'tooFar'
    | 'atOrigin'
    | 'enRoute'
    | 'arrived'
    | null
  >(null)
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

  return (
    <div>
      <MapContainer
        className='fixed h-full w-full'
        center={position}
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
          <Marker position={position} icon={userIcon} ref={markerRef}>
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
                />
              </Popup>
            </Marker>
          )
        })}
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
        rideState={startPoint ? 'atOrigin' : 'selectDest'}
        startPoint={startPoint}
        endPoint={endPoint}
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
