import { Link } from "react-router-dom";
import uberLogo from "/src/assets/uber-logo-png-1584.png";
import UberBg from "../assets/original.avif";
import CaptianDetails from "../components/CaptianDetails";

const CaptianRiding = () => {
  return (
    <>
      <div className="h-screen">
        <div className="fixed p-3 top-0 flex">
          <img className="w-20 fixed top-5" src={uberLogo} alt="" />
          <Link
            to="/home"
            className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-[80%] [@media(max-width:400px)]:h-[80%]">
          <img src={UberBg} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 h-[20%] flex relative justify-between items-center gap-2  [@media(max-width:400px)]:h-[20%] bg-yellow-400">
          <h5
            onClick={() => {
              props.setConfirmRidePanal(false);
            }}
            className="flex top-1 right-[50%] left-[50%] absolute justify-center items-center font-semibold text-2xl text-gray-600"
          >
            <i className="ri-arrow-up-wide-line"></i>
          </h5>
          <h4 className="text-xl font-semibold">4 KM Away</h4>
          <button className="rounded-lg bg-green-700 py-3 px-10 text-white font-semibold">
            Complete Ride
          </button>
        </div>
      </div>
    </>
  );
};

export default CaptianRiding;
