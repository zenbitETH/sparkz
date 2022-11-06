import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'
import { useEffect } from 'react';

const createRoutineMachineLayer = ({ startPoint, endPoint }) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(startPoint[0], startPoint[1]),
      L.latLng(endPoint[0], endPoint[1]),
    ],
    lineOptions: {
      styles: [{ color: 'blue', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function () {
      return null
    },
  })

  useEffect(() => {
    setTimeout(() => {
      window.resizeTo(window.innerWidth - 1, window.innerHeight -1 )
    }, 2000)
  }, [])

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
