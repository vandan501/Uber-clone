import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap";
import LocationPanel from "../components/LocationPanel";
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [openmodal, setOpenModal] = useState(false);
  const modalRef = useRef(null)
  const modalCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function() {
      if(openmodal)
        {
          gsap.to(modalRef.current,{
            height:'70%',
            opacity:1,
            padding:"20px"
          })     
          gsap.to(modalCloseRef.current,{
            opacity:1
          }) 
        } else{
          gsap.to(modalRef.current,{
            height:'0%',
            opacity:0,
            padding:"0px"
          })  
          gsap.to(modalCloseRef.current,{
            opacity:0
          }) 
        }
  },[openmodal])

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
        <div className="bg-yellow-500 w-full h-full"></div>
      </div>
      <div  className=" absolute flex flex-col z-30  justify-end h-screen top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative ">
          <div className="w-full flex justify-between">
          <h4 className="font-mono text-2xl font-semibold">Find a trip</h4>
          <h5 ref={modalCloseRef} className="text-3xl cursor-pointer " onClick={()=>{
            setOpenModal(false)
          }}><i className="ri-close-line"></i></h5>
          </div>
          <form 
            onClick={()=>{setOpenModal(true)}}
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line w-1 h-16 absolute top-[50%] left-8 bg-slate-800 rounded-full"></div>
            <input
              placeholder="Add a Pick up location"
              onClick={()=>{setOpenModal(true)}}
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] w-full mt-5 mb-3 px-8 py-2 rounded-lg text-base border-none outline-none"
            />
            <input
              placeholder="Enter Your Destination"
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
          <LocationPanel/>
        </div>
      </div>
    </div>
  );
}

export default Home;
