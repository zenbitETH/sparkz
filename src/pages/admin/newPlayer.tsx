import { WorldIDWidget } from '@worldcoin/id'

export default function addPlace() {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-night-100 sm:items-center py-4 sm:pt-0 font-exo">
        <div className="card0 px-5 max-w-3xl ">
          <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
            <form >
            <div className="text-white text-4xl mb-10">🚴 New Player</div>
              <div className="text-left text-xl">
                <label className="text-white">Player</label>
                <input type="text" name="playerName"  placeholder="Choose a name or a tag"  className="formInput mt-2 mb-5" 
                />
                <div className="grid grid-cols-2 gap-5">
                  <div>
                      <label className="text-white">Type of place:</label>
                        <select id="City" placeholder="Choose a city to play" name="placeType" className="bg-white mb-5 pl-5 text-black w-full rounded-lg px-6 py-3 mt-2 ">
                          <option disabled selected>Choose a city to play</option>
                          <option>San Francisco</option>
                        </select>
                  </div>
                  <div>
                      <label className="text-white">Type of place:</label>
                        <select id="City" placeholder="Choose a city to play" name="placeType" className="bg-white mb-5 pl-5 text-black w-full rounded-lg px-6 py-3 mt-2 ">
                          <option disabled selected>Choose a city to play</option>
                          <option>San Francisco</option>
                        </select>
                  </div>
                </div>    
                <label className="text-white">Do you have a Worldcoin ID?</label>
                {/*<WorldIDWidget
                  actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                  signal="my_signal"
                  enableTelemetry
                  onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                  onError={(error) => console.error(error)}
                />*/}
                
              </div>
            </form>
            
          </div>
          <div className="col-span-12 text-center mb-10">
            {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
            <div className="formBT">Mint Place NFT</div>
          </div>
        </div>
        </div>

    )
}