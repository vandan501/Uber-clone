import React from "react";

function VehicleModal(props) {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-mono mb-4 font-bold cursor-pointer">
          Choose a Vehicle
        </h3>
        <i
          onClick={() => {
            props.setVehicleModal(false);
          }}
          className="ri-close-line text-3xl absolute right-6 cursor-pointer"
        ></i>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRideModal(true);
          props.setVehicleModal(false);
        }}
        className="w-full active:border-black bg-white-100 rounded-md border-2 p-3 flex justify-between items-center  gap-2"
      >
        <img
          src="https://img.freepik.com/free-psd/yellow-isolated-car_23-2151852892.jpg?semt=ais_hybrid"
          alt="car-logo-icon"
          className=" h-14 rounded-full "
        />

        <div className="flex w-[50%] flex-col">
          <div className="flex justify-start items-center gap-2">
            <h4 className="font-bold text-xl">UberGo</h4>{" "}
            <i className="ri-user-3-fill text-xl">4</i>{" "}
          </div>
          <span className="font-medium text-base">2 mins away</span>
          <p className="font-medium text-xs text-gray-700 ">
            Affordable Compact rides
          </p>
        </div>
        <p className="text-2xl w-[25%] font-semibold"> ₹221</p>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRideModal(true);
          props.setVehicleModal(false);
        }}
        className="w-full active:border-black bg-white-100 rounded-md border-2 p-3 flex justify-between items-center  gap-2 "
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpS08S6tXIV3FLSF-rpl5qAjyJNIAO60chmw&s"
          alt="auto-logo-icon"
          className=" h-14 rounded-full "
        />

        <div className="flex w-[50%] flex-col">
          <div className="flex justify-start items-center gap-2">
            <h4 className="font-bold text-xl">Uber Auto</h4>{" "}
            <i className="ri-user-3-fill text-xl">3</i>{" "}
          </div>
          <span className="font-medium text-base">5 mins away</span>
          <p className="font-medium text-xs text-gray-700 ">
            Affordable Auto rides
          </p>
        </div>
        <p className="text-2xl w-[25%] font-semibold"> ₹121</p>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRideModal(true);
          props.setVehicleModal(false);
        }}
        className="w-full active:border-black bg-white-100 rounded-md border-2 p-3 flex justify-between items-center  gap-2 "
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAURjZhCkv_6ISqH1GvG67MfqYV1CnLxXBig&s"
          alt="bike-logo-icon"
          className=" h-14 rounded-full "
        />

        <div className="flex w-[50%] flex-col">
          <div className="flex justify-start items-center gap-2">
            <h4 className="font-bold text-xl">UberBike</h4>{" "}
            <i className="ri-user-3-fill text-xl">1</i>{" "}
          </div>
          <span className="font-medium text-base">10 mins away</span>
          <p className="font-medium text-xs text-gray-700 ">
            Affordable Bike rides
          </p>
        </div>
        <p className="text-2xl w-[25%] font-semibold"> ₹71</p>
      </div>
    </>
  );
}

export default VehicleModal;
