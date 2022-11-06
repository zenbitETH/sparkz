import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import dynamic from 'next/dynamic'
import type { LatLngTuple } from 'leaflet'
import React, { useEffect } from 'react'
import Loading from '../components/Loading'

const Home = () => {
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  })

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

  const [loc, setLoc] = React.useState<LatLngTuple | null>(null)

  if (!loc) {
    return <Loading />
  }
  return (
    <div className='h-screen'>
      {/* <h1 className='text-red-600'>Home</h1> */}
      <div className='absolute h-full w-full bg-gray-600'>
        <MapWithNoSSR position={loc} />
      </div>
    </div>
  )
}

export default Home
