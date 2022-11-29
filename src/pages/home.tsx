import { getCsrfToken, signIn, useSession } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import {
  useAccount,
  useConnect,
  useNetwork,
  useSignMessage,
  useEnsAvatar,
  useEnsName,
  useDisconnect,
} from 'wagmi'
//import Layout from '../components/layout'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from '../components/Container'
import image1 from '../../public/image-1.jpg'
import image2 from '../../public/image-2.jpg'
import image3 from '../../public/image-3.jpg'
import image4 from '../../public/image-4.jpg'
import image5 from '../../public/image-5.jpg'
import logo from '../../public/logo.png'
import Image from 'next/image'
import clsx from 'clsx'
import { Button } from '../components/Button'
import { XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

function Siwe() {
  const { signMessageAsync } = useSignMessage()
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const router = useRouter()

  const { data: session, status } = useSession()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (  
      <div className='h-full grid items-center inset-0 flex justify-center bg-gradient-to-br from-ugas-800  to-ugas-800 sm:px-8 font-exo'>
      <div className='relative  '>
        <Container>
        <div className='grid xl:grid-cols-2 items-center h-screen'>
            <div className=''>
              <Image
                src={logo}
                alt=''
                height={600}
                className='mx-auto'
              />
            </div>
            <div className='font-exo text-center lg:text-4xl text-white text-xl text-justify -mt-96 xl:mt-0 xl:leading-normal'>
            <div>Gamified net-zero mobility that develops a web3 calorie market.</div>
            <div className='mx-auto'>
              {isConnected ? (
              <button className='rounded-full p-3 text-sm text-white'>
                <div>{shortHandAddress(address!)}</div>
                <XIcon onClick={disconnect} className='ml-1 mt-1 h-3 w-3' />
              </button>
                ) : (
                  <div className='mx-auto grid max-w-xs mt-10'>
                    <Button
                      className='rounded-full'
                      key={connectors[0]!.id}
                      onClick={() => {
                        connect({ connector: connectors[0] })
                        router.replace('/')
                      }}
                    >
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='animate-bounce text-white text-center -mt-32 xl:-mt-10 text-2xl'>↓ More ↓</div>
        </Container>
        <div className='grid items-center text-center text-white h-screen'>hi</div>
      </div>
      </div>
    
  )
}
const fs = require('fs')
export async function getServerSideProps(context: any) {
  fs
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
function shortHandAddress(address: string) {
  if (address?.length) {
    return `${address.substring(0, 5)}...${address.substring(
      address.length - 6,
      address.length
    )}`
  }
  return ''
}


export default Siwe
