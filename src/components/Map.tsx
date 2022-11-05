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
import { useRef, useState } from 'react'
import { useAccount, useConnect, useNetwork, useSignMessage, useEnsAvatar, useEnsName, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router';
import { GestureHandling } from 'leaflet-gesture-handling'

import Modal from './Modal'

//import styles from '../../styles/Map.module.scss'
//import styles from '../../styles/Map.module.scss'
import PlaceMenu from './PlaceMenu'
import { XIcon } from '@heroicons/react/solid';

import locs from '../../locations.json' assert { type: 'json' }
var greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// const InternalPop = () => {
//   return (
//     <div>
//       <div>hello</div>
//       <button>click me</button>
//     </div>
//   )
// }

const Map = ({ position }: { position: LatLngTuple }) => {
  const router = useRouter();
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

  console.log('position', position)

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
          <Marker position={position} icon={greenIcon} ref={markerRef}>
            <Popup className='userLocPopUp'>
              <PlaceMenu />
            </Popup>
          </Marker>
        </div>
        {locs.map((loc) => {
          const position = [loc.lat, loc.lon] as LatLngTuple
          const side = 50
          const icon = new L.Icon({
            iconUrl: loc.img,
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [side, side],
            iconAnchor: [side / 2, side / 2],
            popupAnchor: [0, -side / 2],
            shadowSize: [41, 41],
          })
          // const icon = new L.Icon({
          //   iconUrl:
          //     'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          //   shadowUrl:
          //     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          //   iconAnchor: [loc.lat, loc.lon],
          //   popupAnchor: [loc.lat, loc.lon],
          //   shadowUrl: null,
          //   shadowSize: null,
          //   shadowAnchor: null,
          //   iconSize: new L.Point(60, 60),
          //   className: 'leaflet-div-icon',
          //   onclick: () => {
          //     console.log('clicked')
          //   },
          // })
          return (
            <Marker
              icon={icon}
              position={position}
              key={loc.name}
              eventHandlers={{
                click: (e) => {
                  console.log(e)
                },
              }}
            >
              <Popup>
                <PlaceMenu name={loc.name} />
              </Popup>
            </Marker>
          )
        })}
        {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      </MapContainer>
      <Modal handleMarker={onClickShowMarker} />
      <button 
        className="fixed flex flex-row w-30 top-2 right-2 text-white rounded-full border border-gray-400 text-sm p-3 text-black z-100"
        onClick={ () => {
          disconnect()
          router.replace('/home')
        }}
        >
          
        <div>{shortHandAddress(address!)}</div>
        <XIcon  className="h-3 w-3 ml-1 mt-1 z-50 h-20" />
      </button>
    </div>
  )
}

function shortHandAddress (address: string) {
  if (address?.length) {
    return `${address.substring(0,5)}...${address.substring((address.length - 6), address.length)}`
  }
return ''
}

export default Map

/*
  const { MapContainer, Marker, Popup, TileLayer, useMap } = DynamicReactLeaflet
  const [loc, setLoc] = useState([51.505, -0.09])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // this prettier formatting is the worst
      // this is what I want this to look like, saved by comments
      (position) => {
        const { latitude, longitude } = position.coords
        const latLong = [latitude, longitude]
        setLoc(latLong)
        console.log(position)
      }
    ),
      (error: string) => {
        console.error(error)
      }
  }, [])
  return (
    <div>
      <MapContainer>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={loc}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
  */
