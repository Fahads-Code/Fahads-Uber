import { Link } from "react-router-dom";
import UberBg from "../assets/original.avif";
import UberCarIcon from "../assets/uber-icon-removebg-preview.png";
import uberLogo from "/src/assets/uber-logo-png-1584.png";
import DriverImage from "/src/assets/driver-image.avif";
import CaptianDetails from "../components/CaptianDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptianHome = () => {
  const [ridePopup, setRidePopup] = useState(true);
  const ridePopupPanalRef = useRef(null);
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  const confirmRidePopupRef = useRef(null);

  useGSAP(() => {
    if (ridePopup) {
      gsap.to(ridePopupPanalRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(ridePopupPanalRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [ridePopup]);

  useGSAP(() => {
    if (confirmRidePopup) {
      gsap.to(confirmRidePopupRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(confirmRidePopupRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [confirmRidePopup]);

  return (
    <>
      <div className="h-screen">
        <div className="fixed p-3 top-0 flex">
          <img className="fixed w-20 top-5" src={uberLogo} alt="" />
          <Link
            to = "/home"
            className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-[70%] [@media(max-width:400px)]:h-[65%]">
          <img src={UberBg} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex h-[30%] flex-col gap-10 [@media(max-width:400px)]:gap-4 [@media(max-width:400px)]:h-[35%]">
          <CaptianDetails />
        </div>
        <div ref={ridePopupPanalRef} className="fixed translate-y-full w-full z-10 bottom-0 px-3 py-7 bg-white">
          <RidePopup setRidePopup={setRidePopup} setConfirmRidePopup={setConfirmRidePopup}/>
        </div>
        <div ref={confirmRidePopupRef} className="fixed translate-y-full w-full z-10 bottom-0 px-3 bg-white">
          <ConfirmRidePopup setConfirmRidePopup={setConfirmRidePopup} setRidePopup={setRidePopup}/>
        </div>
      </div>
    </>
  );
};

export default CaptianHome;
