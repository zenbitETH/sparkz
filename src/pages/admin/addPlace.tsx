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
              <div className='p-5'>
                    <div className='text-white text-center'>Upload cover image</div>
                    <div className="flex justify-center items-center w-full">
                        <label className="formFile">
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          
                        </label>
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