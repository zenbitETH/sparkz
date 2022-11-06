import Link from 'next/link'
import { useAccount, useContractRead } from 'wagmi'
import sparkZjson from '../constants/sparkZ.json' assert { type: 'json' }

export default function Modal(props) {
  const { address, isConnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: '0xd66a0156935684bd2b1Cb6a2aBE9c6B1c26b94CA',
    abi: sparkZjson.abi,
    functionName: 'addressToUserDetail',
    args: [address],
  })
  return (
    <div
      id='modal'
      className='fixed left-1/2  z-50 grid h-20 w-full -translate-x-1/2 transform grid-cols-4 items-center rounded-b-xl bg-purple-500 text-center font-exo text-lg  font-bold text-white lg:w-1/2 lg:text-2xl'
    >
      {<div className=' '>{`${data?.sparkz || '$$$$'}  ✨`}</div>}
      {<div className=' '>{`${data?.shadowz || '$$$$'}  🌑`}</div>}
      <Link
        className=' mr-4 rounded-full border border-gray-400 text-base'
        href='/admin/addPlace'
      >
        Add Place
      </Link>
      <Link
        className=' mr-4 rounded-full border border-gray-400 text-base'
        href='/admin/newPlayer'
      >
        Register Player
      </Link>
    </div>
  )
}
