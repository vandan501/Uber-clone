import React from "react";

function LookingForDriver(props) {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-mono mb-4 font-bold cursor-pointer">
          Looking For a a Driver
        </h3>
        <i
          onClick={() => {
            props.setVehicleFound(false);
          }}
          className="ri-close-line text-3xl absolute right-6 cursor-pointer"
        ></i>
      </div>
      <div className="w-full flex flex-col  justify-between items-center gap-2">
        <img
          className="h-20"
          src="https://img.freepik.com/free-psd/yellow-isolated-car_23-2151852892.jpg?semt=ais_hybrid"
        />
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
    </>
  );
}

export default LookingForDriver;
