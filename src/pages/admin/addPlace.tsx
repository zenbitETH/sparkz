export default function addPlace() {
    
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-night-100 sm:items-center py-4 sm:pt-0 font-exo">
      <div className="card0 px-5 max-w-3xl ">
        <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
          <div className="text-white text-4xl mb-10">⛲ Add Place</div>
            <div className="text-left text-xl">
              <label className="text-white">Type of place:</label>
              <select id="TypeOfPlace" placeholder="Park"  className="bg-white mb-5 pl-5 text-black w-full rounded-lg px-6 py-3 mt-2 ">
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
              <input type="text" placeholder="Its name is..."  className="formInput mt-2 mb-5"/>
              <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="text-white">Latitude</label>
                    <input type="text" placeholder="Type the lat cordinates"   className="formInput mt-2 mb-5"/>
                </div>
                <div>
                    <label className="text-white">Longitude</label>
                    <input type="text" placeholder="Type the long cordinates"   className="formInput mt-2 mb-5"/>
                </div>
              </div>
             
              
            </div>
        </div>
        <div className="col-span-12 text-center mb-10">
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div className="formBT">Mint Place NFT</div>
        </div>
      </div>
      </div>
    )
  }