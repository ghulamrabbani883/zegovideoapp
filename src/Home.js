import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/conf.jpg";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleRoomIdClick = (e)=>{
    e.preventDefault();
    const id = uuidv4();
    navigator.clipboard.writeText(id);
    alert('Your roomId is copied to clipboard')
  }
  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className=" ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative h-screen ">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover  w-full h-full" alt="conf" />
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-12">
              Video Chat App
            </h1>
            <p className="text-[26px] text-white  -mt-2">With Your Team</p>
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <div className="">
                <button className="text-[16px] px-3 py-1 rounded-3xl bg-orange-500 hover:bg-orange-400 duration-100 ease-out font-bold" type="button" onClick={handleRoomIdClick}>Create Room Code</button>
              </div>
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
                Enter Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
