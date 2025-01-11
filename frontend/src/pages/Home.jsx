import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import LocationPanel from "../components/LocationPanel";
import VehicleModal from "../components/VehicleModal";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitForDriver from "../components/WaitForDriver";
import LookingForDriver from "./LookingForDriver";
function Home() {
  const vehicleModalRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const confirmedRideModalRef = useRef(null);
  const modalRef = useRef(null);
  const modalCloseRef = useRef(null);
  const waitingForDriverRef=useRef(null);
  const [openmodal, setOpenModal] = useState(false);
  const [destination, setDestination] = useState("");
  const [pickup, setPickup] = useState("");
  const [vehiclemodal, setVehicleModal] = useState(false);
  const [confirmedRideModal, setConfirmedRideModal] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriverModal, setWaitingForDriverModal] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (openmodal) {
        gsap.to(modalRef.current, {
          height: "70%",
          display: "block",
          padding: "20px",
        });
        gsap.to(modalCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(modalRef.current, {
          height: "0",
          display: "none",
          padding: "0px",
        });
        gsap.to(modalCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [openmodal]
  );
  useGSAP(
    function () {
      if (vehiclemodal) {
        gsap.to(vehicleModalRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleModalRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclemodal]
  );

  useGSAP(
    function () {
      if (confirmedRideModal) {
        gsap.to(confirmedRideModalRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmedRideModalRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRideModal]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriverModal) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverModal]
  );

  return (
    <div className="w-full relative h-screen overflow-y-scroll overflow-x-hidden">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
          className="w-16 absolute z-10 left-5 top-5"
        />
      </div>
      <div className="w-screen h-screen">
        {/* // image for tmp use */}
        {/* <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4sNWtdxjfOC-vG9mBbv-v1_DL31ZSohhmg&s"
      alt=""
      className="w-full h-full object-contain md:hidden"
      /> */}
        <div
          onClick={() => {
            setVehicleModal(false);
          }}
          className="bg-yellow-500 w-full h-full"
        ></div>
      </div>
      <div className=" absolute flex flex-col z-30  justify-end h-screen top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative ">
          <div className="w-full flex justify-between">
            <h4 className="font-mono text-2xl font-semibold">Find a trip</h4>
            <h5
              ref={modalCloseRef}
              className="text-3xl cursor-pointer "
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <i className="ri-close-line"></i>
            </h5>
          </div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line w-1 h-16 absolute top-[90px] left-8 bg-slate-800 rounded-full"></div>
            <input
              placeholder="Add a Pick up location"
              onClick={() => {
                setOpenModal(true);
              }}
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] w-full mt-5 mb-3 px-8 py-2 rounded-lg text-base border-none outline-none"
            />
            <input
              placeholder="Enter Your Destination"
              onClick={() => {
                setOpenModal(true);
              }}
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] w-full px-8 py-2 rounded-lg text-base border-none outline-none"
            />
          </form>
        </div>
        <div ref={modalRef} className="h-[70%] px-3 bg-white ">
          <LocationPanel
            setVehicleModal={setVehicleModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
      <div
        ref={vehicleModalRef}
        className="fixed z-40 px-4 flex flex-col gap-2 w-full translate-y-full bottom-0 bg-white  p-3"
      >
        <VehicleModal
          setConfirmedRideModal={setConfirmedRideModal}
          setVehicleModal={setVehicleModal}
        />
      </div>
      <div
        ref={confirmedRideModalRef}
        className="fixed z-40 px-4 flex flex-col gap-2 w-full translate-y-full bottom-0 bg-white  p-3"
      >
        <ConfirmedRide
          setVehicleFound={setVehicleFound}
          setConfirmedRideModal={setConfirmedRideModal}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-40 px-4 flex flex-col gap-2 w-full translate-y-full bottom-0 bg-white  p-3"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
      ref={waitingForDriverRef}
        className="fixed z-40 px-4 flex flex-col gap-2 w-full  bottom-0 bg-white  p-3"
      >
        <WaitForDriver setWaitingForDriverModal={setWaitingForDriverModal}/>
      </div>
    </div>
  );
}

export default Home;
