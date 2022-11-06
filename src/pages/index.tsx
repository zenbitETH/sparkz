import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import dynamic from 'next/dynamic'
import type { LatLngTuple } from 'leaflet'
import React, { useEffect } from 'react'


const Home = () => {
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  })

  return (
    <div className='h-screen '>
      {/* <h1 className='text-red-600'>Home</h1> */}
      <div className='absolute h-full w-full bg-gray-600'>
        <MapWithNoSSR />
      </div>
    </div>
  )
}

export default Home
