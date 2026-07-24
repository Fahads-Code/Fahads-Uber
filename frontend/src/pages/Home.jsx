import React, { useRef, useState } from "react";
import uberLogo from "/src/assets/uber-logo-png-1584.png";
import uberHomePic from "/src/assets/original.avif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanal from "../components/LocationSearchPanal";
import VehiclePanal from "../components/VehiclePanal";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [panalOpen, setPanalOpen] = useState(false);
  const panalRef = useRef(null);
  const panalCloseRef = useRef(null);
  const [vehiclePanal, setVehiclePanal] = useState(false);
  const vehiclePanalRef = useRef(null);
  const [confirmRidePanal, setConfirmRidePanal] = useState(false);
  const confirmRidePanalRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const WaitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panalOpen) {
      gsap.to(panalRef.current, {
        height: "70%",
        padding: "20px",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(panalCloseRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(panalRef.current, {
        height: "0%",
        padding: "0px",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(panalCloseRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [panalOpen]);

  useGSAP(() => {
    // warm up compositor layers on mount, before any real interaction
    gsap.set(
      [
        vehiclePanalRef.current,
        confirmRidePanalRef.current,
        vehicleFoundRef.current,
        WaitingForDriverRef.current,
      ],
      {
        y: "100%",
        force3D: true,
      },
    );
  }, []);

  useGSAP(() => {
    if (vehiclePanal) {
      gsap.to(vehiclePanalRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(vehiclePanalRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [vehiclePanal]);

  useGSAP(() => {
    if (confirmRidePanal) {
      gsap.to(confirmRidePanalRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(confirmRidePanalRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [confirmRidePanal]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [waitingForDriver]);

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          src={uberLogo}
          className="w-16 absolute top-5 left-5 z-10"
          alt="Uber Logo"
        />

        <div className="h-[75%] [@media(max-width:380px)]:h-[70%] w-screen">
          <img
            src={uberHomePic}
            alt="Map"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col justify-end h-screen absolute bottom-0">
          <div className="[@media(max-width:380px)]:h-[30%] h-[25%] bg-white w-full p-5 relative z-10">
            <h5
              ref={panalCloseRef}
              onClick={() => setPanalOpen(false)}
              className="absolute opacity-0 text-2xl top-6 right-6 cursor-pointer"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>

            <h4 className="mb-7 text-3xl font-semibold">Find a trip</h4>
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-3 relative"
            >
              <div className="line absolute w-1 h-16 top-[20%] left-4 bg-gray-700 rounded-full"></div>
              <input
                className="bg-[#eee] pl-10 pr-4 py-2 text-lg rounded-lg w-full"
                value={location}
                type="text"
                placeholder="Add a pick-up location"
                onClick={() => setPanalOpen(true)}
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                className="bg-[#eee] pl-10 pr-4 py-2 text-lg rounded-lg w-full"
                value={destination}
                type="text"
                placeholder="Enter your destination"
                onClick={() => setPanalOpen(true)}
                onChange={(e) => setDestination(e.target.value)}
              />
            </form>
          </div>
          <div ref={panalRef} className="bg-white h-[0%] overflow-hidden">
            <LocationSearchPanal
              setPanalOpen={setPanalOpen}
              vehiclePanal={vehiclePanal}
              setVehiclePanal={setVehiclePanal}
            />
          </div>
        </div>

        <div
          ref={vehiclePanalRef}
          className="fixed z-10 bg-white bottom-0 px-3 py-8 w-full translate-y-full"
        >
          <VehiclePanal
            vehiclePanalRef={vehiclePanalRef}
            setConfirmRidePanal={setConfirmRidePanal}
            setVehiclePanal={setVehiclePanal}
            setPanalOpen={setPanalOpen}
          />
        </div>

        <div
          ref={confirmRidePanalRef}
          className="fixed z-10 bg-white bottom-0 px-3 pb-6 pt-3 w-full translate-y-full"
        >
          <ConfirmRide
            setConfirmRidePanal={setConfirmRidePanal}
            setVehicleFound={setVehicleFound}
          />
        </div>

        <div
          ref={vehicleFoundRef}
          className="fixed z-20 bg-white bottom-0 px-3 pb-6 pt-3 w-full translate-y-full"
        >
          <LookingForDriver
            setVehicleFound={setVehicleFound}
            setWaitingForDriver={setWaitingForDriver}
          />
        </div>

        <div
          ref={WaitingForDriverRef}
          className="fixed z-20 bg-white bottom-0 px-3 pb-6 pt-3 w-full translate-y-full"
        >
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
        </div>
      </div>
    </>
  );
};

export default Home;
