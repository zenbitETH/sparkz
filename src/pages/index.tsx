import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import dynamic from 'next/dynamic'
import type { LatLgTuple, LatLngTuple } from 'leaflet'
import React, { useEffect } from 'react'

const Home = () => {
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  })

  // const [loc ,setLoc] = useState<number[]>([0, 0])
  //const [mapCenter, setMapCenter] = useState<number[]>([0, 0])
  //const [loc, setLoc] = useState([51.505, -0.09])
  // useEffect(() => {}, [data])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const latLong = [latitude, longitude] as LatLngTuple
        setLoc(latLong)
        console.log(latLong)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  const [loc, setLoc] = React.useState<LatLngTuple | null>(null)

  if (!loc) {
    return <div>Loading...</div>
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

type TechnologyCardProps = {
  name: string
  description: string
  documentation: string
}

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className='flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105'>
      <h2 className='text-lg text-gray-700'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <Link
        className='m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2'
        href={documentation}
        target='_blank'
        rel='noreferrer'
      >
        Documentation
      </Link>
    </section>
  )
}
