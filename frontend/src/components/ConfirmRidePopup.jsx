import { Link } from "react-router-dom";
import UberCarIcon from "../assets/uber-icon-removebg-preview.png";
import DriverImage from "/src/assets/driver-image.avif";

const ConfirmRidePopup = (props) => {
  return (
    <>
      <div className="h-screen pt-4">
        <h5
          onClick={() => {
            props.setRidePopup(false);
            props.setConfirmRidePopup(false);
          }}
          className="w-full flex justify-center items-center font-bold text-lg text-gray-600"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          Confirm This Ride To Start!
        </h3>

        <div className="flex items-center justify-between mt-3 bg-yellow-400 p-3 rounded-xl my-2">
          <div className="flex items-center gap-3">
            <img
              src={DriverImage}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <h2 className="text-xl font-medium">Suhaib Ahmed</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 KM</h5>
        </div>

        <div className="flex justify-between gap-2 flex-col items-center">
          <div className="w-full">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Block F-12</h3>
                <p className="text-sm text-gray-600">Nazimabad, karachi</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Block F-12</h3>
                <p className="text-sm text-gray-600">Nazimabad, karachi</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">PKR 290</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <form
           
            onSubmit={(e)=>{
                e.preventDefault();
            }}>
              <input type="text" placeholder="Enter OTP" className="bg-[#eee] pl-10 pr-4 py-2 text-lg rounded-lg w-full"/>
              <Link
                to="/captianRiding"
                className="w-full mt-5 rounded-lg bg-green-700 p-2 flex justify-center items-center text-white font-semibold"
              >
                Confirm Ride
              </Link>
              <button
                onClick={() => {
                  props.setConfirmRidePopup(false);
                }}
                className="w-full mt-2 rounded-lg bg-red-500 p-2 text-white font-semibold"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopup;
