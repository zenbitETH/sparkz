import { WorldIDWidget } from '@worldcoin/id'
import { useState, useEffect } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import sparkZAbi from '../../constants/sparkZ.json'

export default function newPlayer() {
  const [inputs, setInputs] = useState<Record<string, any>>({})
  const [args, setArgs] = useState<any>({})
  const handleChange = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values: Record<string, any>) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async () => {
    await write?.()
  }

  const { config } = usePrepareContractWrite({
    address: '0xd66a0156935684bd2b1Cb6a2aBE9c6B1c26b94CA',
    abi: sparkZAbi.abi,
    functionName: 'registerUser',
    args,
    chainId: 80001,
  })

  useEffect(() => {
    const mintFunction = async () => {
      const args: any = [inputs.playerName, 'San Francisco', 'Canada']
      setArgs(args)
    }

    mintFunction()
  }, [inputs])

  const {
    data: contractWriteData,
    isLoading: isWriteLoading,
    isSuccess,
    error,
    write,
  } = useContractWrite(config ? config : {})
  console.log('error,', error)
  return (
    <div className='items-top dark:bg-night-100 relative flex min-h-screen justify-center bg-gray-100 py-4 font-exo sm:items-center sm:pt-0'>
      <div className='card0 max-w-3xl px-5 '>
        <div className='col-span-12 row-span-5 rounded-3xl p-5 text-center'>
          <form>
            <div className='mb-10 text-4xl text-white'>🚴 New Player</div>
            <div className='text-left text-xl'>
              <label className='text-white'>Player</label>
              <input
                onChange={handleChange}
                type='text'
                name='playerName'
                placeholder='Choose a name or a tag'
                value={inputs.playerName || ''}
                className='formInput mt-2 mb-5'
              />
              <div className='grid grid-cols-2 gap-5'>
                <div>
                  <label className='text-white'>Type of place:</label>
                  <select
                    id='City'
                    placeholder='Choose a city to play'
                    name='placeType'
                    className='mb-5 mt-2 w-full rounded-lg bg-white px-6 py-3 pl-5 text-black '
                  >
                    <option disabled selected>
                      Choose a city to play
                    </option>
                    <option>San Francisco</option>
                  </select>
                </div>
                <div>
                  <label className='text-white'>Type of place:</label>
                  <select
                    id='City'
                    placeholder='Choose a city to play'
                    name='placeType'
                    className='mb-5 mt-2 w-full rounded-lg bg-white px-6 py-3 pl-5 text-black '
                  >
                    <option disabled selected>
                      Choose a city to play
                    </option>
                    <option>San Francisco</option>
                  </select>
                </div>
              </div>
              <label className='text-white'>Do you have a Worldcoin ID?</label>
              {/* <WorldIDWidget
                  actionId="wid_staging_787c6e87256769d805c0892889048671" // obtain this from developer.worldcoin.org
                  signal="my_signal"
                  enableTelemetry
                  onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                  onError={(error) => console.error(error)}
                /> */}
            </div>
          </form>
        </div>
        <div className='col-span-12 mb-10 text-center'>
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div onClick={handleSubmit} className='formBT'>
            Register new player
          </div>
        </div>
      </div>
    </div>
  )
}
