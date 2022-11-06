/* import the ipfs-http-client library */
import { create } from 'ipfs-http-client'
import { useState, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import sparkZjson from '../../constants/sparkZ.json'

export default function addPlace() {
  const [inputs, setInputs] = useState<Record<string, any>>({})
  const [args, setArgs] = useState<any>({})

  const handleChange = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values: Record<string, any>) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async () => {
    console.log('handleSubmit')
    await write?.()
  }

  const { config } = usePrepareContractWrite({
    address: '0xd66a0156935684bd2b1Cb6a2aBE9c6B1c26b94CA',
    abi: sparkZjson.abi,
    functionName: 'upgradePlace',
    args,
    chainId: 80001,
  })

  useEffect(() => {
    const mintFunction = async () => {
      const locationId = parseInt(inputs.locationId)
      const shadowz = parseInt(inputs.shadowz)
      const level = parseInt(inputs.level)
      const args: any = [
        locationId.toString(),
        shadowz.toString(),
        level.toString(),
      ]
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

  console.log('isSuccess', isSuccess)
  return (
    <div className='items-top dark:bg-night-100 relative flex min-h-screen justify-center bg-gray-100 py-4 font-exo sm:items-center sm:pt-0'>
      <div className='card0 max-w-3xl px-5 '>
        <div className='col-span-12 row-span-5 rounded-3xl p-5 text-center'>
          <form>
            <div className='mb-10 text-4xl text-white'>⛲ Upgrade Place</div>
            <div className='text-left text-xl'>
              <div className='grid grid-cols-3 gap-3'>
                <div>
                  <label className='text-white'>Location ID</label>
                  <input
                    type='number'
                    name='locationId'
                    placeholder='1'
                    value={inputs.locationId || ''}
                    onChange={handleChange}
                    className='formInput mt-2 mb-5'
                  />
                </div>
                <div>
                  <label className='text-white'>Shadowz</label>
                  <input
                    type='number'
                    name='shadowz'
                    placeholder='5000'
                    value={inputs.shadowz || ''}
                    onChange={handleChange}
                    className='formInput mt-2 mb-5'
                  />
                </div>
                <div>
                  <label className='text-white'>Level</label>
                  <input
                    type='number'
                    name='level'
                    placeholder='8'
                    value={inputs.level || ''}
                    onChange={handleChange}
                    className='formInput mt-2 mb-5'
                  />
                </div>
              </div>
            </div>
            <div className=''>
              {isSuccess && (
                <div className='text-white'>
                  Successfully Upgraded Location ID: {args[0]}
                </div>
              )}
            </div>
          </form>
        </div>
        <div className='col-span-12 mb-10 text-center'>
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div onClick={handleSubmit} className='formBT'>
            Sumbit
          </div>
        </div>
      </div>
    </div>
  )
}
