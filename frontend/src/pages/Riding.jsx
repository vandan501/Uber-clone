import React from "react";

function Riding() {
  return (
    <div className="h-screen w-screen m-0 p-0 overflow-x-hidden">
      <div className="h-1/2 bg-yellow-500 w-full">
        {/* <img/> */}
        <div className="w-full h-full bg-yellow-500"></div>
      </div>
      <div className=" w-full flex flex-col items-center pb-3 ">
        <div className="flex items-center justify-between w-full px-5">
          <img
            className="h-14"
            src="https://img.freepik.com/free-psd/yellow-isolated-car_23-2151852892.jpg?semt=ais_hybrid"
          />
          <div className="flex flex-col justify-end items-end">
            <h2 className="text-2xl font-medium">Vandan</h2>
            <h4 className="text-xl font-mono">GJ-01-VN-XXX</h4>
            <p className="text-sm font-semibold">Huandai i20</p>
            <p className="text-xs font-semibold">Red Color</p>
          </div>
        </div>
        <div className="w-full flex flex-col px-3  justify-between items-center gap-2">
          <div className="w-full flex flex-col gap-5 justify-center   items-start pb-3">
            <div className="w-full flex gap-3 border-t-2 pt-3  justify-start items-center">
              <i className="ri-map-pin-fill text-2xl"></i>
              <div className="flex flex-col items-between">
                <h3 className="font-bold">G/16</h3>
                <h3>Wadaj,AkhbarNagar,Ahmedabad</h3>
              </div>
            </div>
            <div className="w-full flex gap-3 border-t-2 pt-3  justify-start items-center">
              <i class="ri-map-pin-4-line text-2xl"></i>
              <div className="flex flex-col items-between">
                <h3 className="font-bold">1002,Satyamev</h3>
                <h3>VakilBridge,Bopal,Ahmedabad</h3>
              </div>
            </div>
            <div className="w-full flex gap-3 border-t-2 border-b-2 pt-3 pb-2  justify-start items-center">
              <i className="ri-money-rupee-circle-line text-2xl"></i>
              <div className="flex flex-col items-between">
                <h3 className="font-bold">190.₹</h3>
                <h3>Cash</h3>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl">Make a Payment</h2>
        <button className="bg-green-600 my-5 text-white font-semibold px-2 w-full text-lg py-2 md:w-[70%] center cursor-wait">
          Pay
        </button>
      </div>
    </div>
  );
}

export default Riding;
