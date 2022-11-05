import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  CircleMarker,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import { GestureHandling } from 'leaflet-gesture-handling'

import Modal from './Modal'

//import styles from '../../styles/Map.module.scss'
//import styles from '../../styles/Map.module.scss'

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

const Map = ({ position }: { position: LatLngTuple }) => {
  const GestureHandlingSetter = () => {
    /* eslint-disable */
    const map = useMap() as any
    map.gestureHandling.enable()
    map.addHandler('gestureHandling', GestureHandling)
    //setInit(false)
    /* eslint-enable */
    return null
  }

  return (
    <div>
      <MapContainer
        className='absolute	z-10 h-full w-full'
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <GestureHandlingSetter />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <Marker position={position} icon={greenIcon}>
          <Popup>Users Current Location</Popup>
        </Marker>
        {locs.map((loc) => {
          const position = [loc.latitude, loc.longitude] as LatLngTuple
          return (
            <Marker
              position={position}
              key={loc.name}
              eventHandlers={{
                click: (e) => {
                  console.log(e)
                },
              }}
            >
              <Popup>{loc.name}</Popup>
            </Marker>
          )
        })}
        {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      </MapContainer>
      <Modal />
    </div>
  )
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
