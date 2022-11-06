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
    <>
       <div className='fixed inset-0 flex justify-center bg-black sm:px-8 font-exo'>
        <div className='flex w-full max-w-7xl lg:px-8'>
          <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative'>
        <div className='mt-9'>
          <Container>
          <div className=''>
              <div className='mt-20'>
                <Image
                  src={logo}
                  alt=''
                  sizes='(min-width: 640px)'
                  className='object-cover'
                />
              </div>

              <div className='font-exo text-center lg:text-4xl text-zinc-800 dark:text-zinc-100 text-xl'>
                Play to burn calories on bicycle rides in San Francisco
              </div>
              <div className='mx-auto'>
              {isConnected ? (
                <button className='rounded-full p-3 text-sm text-white'>
                  <div>{shortHandAddress(address!)}</div>
                  <XIcon onClick={disconnect} className='ml-1 mt-1 h-3 w-3' />
                </button>
              ) : (
                <div className='mx-auto grid max-w-xs mt-10'>
                <Button
                  type='submit'
                  className=''
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
          </Container>
        </div>
        <Photos />
      </div>
    </>
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

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
      {[image1, image2, image3].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
            )}
          >
            <Image
              src={image}
              alt=''
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Siwe
