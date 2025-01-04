import React from 'react'

function LocationPanel() {
  return (
    <>
     <h3 class="text-lg font-semibold mb-2">Search Locations</h3>
      <ul class="space-y-2  overflow-y-auto">
        <li class="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer">
          Central Park, New York
        </li>
        <li class="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer">
          Times Square, New York
        </li>
        <li class="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer">
          Niagara Falls, Canada
        </li>
        <li class="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer">
          Buckingham Palace, London
        </li>
        <li class="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer">
          Eiffel Tower, Paris
        </li>
      </ul>
    </>
  )
}

export default LocationPanel
