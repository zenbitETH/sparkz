/* import the ipfs-http-client library */
import { create } from 'ipfs-http-client';
import { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';

const projectId = '2H9PlkW4WSouTWsmpuTOFFBGwB3';

const projectSecret = '84b9d3caccfcc2ee184864d597982b70';

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default function addPlace() {
  const [inputs, setInputs] = useState<Record<string,any>>({});
    const [fileUrl, updateFileUrl] = useState(``)
    const [config, setConfig] = useState<any>(null)
    async function onChange(e: any) {
      const file = e.target.files[0]
      try {
        // upload image to ipfs
        const added = await client.add(file)
        const url = `https://infura-ipfs.io/ipfs/${added.path}`
        updateFileUrl(url)
      } catch (error) {
        console.log('Error uploading file: ', error)
      }  
    }

    async function deleteImage() {
      updateFileUrl((''))
    }

    const handleChange = (event: any) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values: Record<string, any>)  => ({...values, [name]: value}))
    }
  
    const handleSubmit = async () => {
      const metadata = createMetadata(inputs, fileUrl)
      // upload metadata to ipfs
      const added = await client.add(JSON.stringify(metadata))
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      console.log('The uploaded metadata ipfs link is ', url)
      const { config } = usePrepareContractWrite({
        address: '',
        abi: [],
        functionName: 'addLocation',
        args: [],
        chainId: 5,
      });
    }

    useEffect(() => {
      const lat = parseInt(inputs.latitude)
      const long = parseInt(inputs.longitude)
      const metadata = createMetadata(inputs, fileUrl)
      const args : any = [0, inputs.placeName, , lat, long, ]
      const { config } = usePrepareContractWrite({
        address: '0xd66a0156935684bd2b1Cb6a2aBE9c6B1c26b94CA',
        abi: [{
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_placeType",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_locationName",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "_latitude",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "_longitude",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "_ipfsuri",
              "type": "string"
            }
          ],
          "name": "addLocation",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }],
        functionName: 'addLocation',
        args,
        chainId: 80001,
      });
      setConfig(config)
    }, [inputs, fileUrl])

    const { data: contractWriteData, isLoading: isWriteLoading, isSuccess, write } = useContractWrite(config);

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-night-100 sm:items-center py-4 sm:pt-0 font-exo">
      <div className="card0 px-5 max-w-3xl ">
        <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
          <form >
          <div className="text-white text-4xl mb-10">⛲ Add Place</div>
            <div className="text-left text-xl">
              <label className="text-white">Type of place:</label>
              <select id="TypeOfPlace" placeholder="Park" name="placeType" onChange={handleChange} className="bg-white mb-5 pl-5 text-black w-full rounded-lg px-6 py-3 mt-2 ">
                <option disabled selected>The place is a...</option>
                <option>⛲ Public Park</option>
                <option>🛹 Skate Park</option>
                <option>⚽ Soccer Field</option>
                <option>🏀 Basket Court</option>
                <option>😄 Playground</option>
                <option>🏋️‍♀️ Outdoor Gym</option>
                <option>🎭 Art Gallery / Museum</option>
                <option>🏟️ Stadium</option>
                <option>🏖️ Beach</option>
                <option>♻️ Recycling Deposit</option>
                <option>🚏 Bus stop</option>
                <option>📚 Library</option>
                <option>🎓 University</option>
                <option>⛪ Church or Temple</option>
                <option>🗳️ Government Office</option>
                <option>🌳 Tree</option>
              </select>
              <label className="text-white">Place Name</label>
              <input type="text" name="placeName"  placeholder="Its name is..."  className="formInput mt-2 mb-5" 
                value={inputs.placeName || ""} 
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="text-white">Latitude</label>
                    <input type="text" name="latitude"  placeholder="Type the lat cordinates" value={inputs.latitude || ""} 
                            onChange={handleChange}  className="formInput mt-2 mb-5"/>
                </div>
                <div>
                    <label className="text-white">Longitude</label>
                    <input type="text" name="longitude"  placeholder="Type the long cordinates"  value={inputs.longitude || ""} 
                            onChange={handleChange}  className="formInput mt-2 mb-5"/>
                </div>
              </div>
              <div className='p-5'>
                    <div className='text-white text-center'>Upload cover image</div>
                    <div className="flex justify-center items-center w-full">
                        <label className="formFile">
                            <div className="cursor-pointer flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className=" mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>

                            </div>
                            <input id="dropzone-file" type="file"  onChange={onChange} className="hidden" />
                            {
                              fileUrl && (
                                <div className="flex flex-row">
                                  <img src={fileUrl} width="300px" />
                                  <XIcon onClick={deleteImage}  className="h-10 w-10 text-white" />
                                </div>
                              )
                            }
                        </label>
                    </div>
                </div>
             
              
            </div>
          </form>
          
        </div>
        <div className="col-span-12 text-center mb-10">
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div onClick={handleSubmit} className="formBT">Mint Place NFT</div>
        </div>
      </div>
      </div>
    )
  }

  export function createMetadata (inputValues: Record<string, any>, ipfsImageUrl: string) {
    return {
      name: inputValues.placeName,
      description: `This place is a ${inputValues.placeType}`,
      attributes: [ {
        trait_type: "Latitude",
        value: inputValues.latitude
      },
      {
        trait_type: "Longitude",
        value: inputValues.longitude
      },
      ],
      image: ipfsImageUrl,
      image_url: ipfsImageUrl
    }
  }