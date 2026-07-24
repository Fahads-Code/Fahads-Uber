import UberBg from "../assets/original.avif";
import UberCarIcon from "../assets/uber-icon-removebg-preview.png";
import {Link} from "react-router-dom"

const Riding = () => {
  return (
    <>
      <div className="h-screen">
        <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
        <div className="h-1/2">
          <img src={UberBg} className="w-full h-full object-cover" />
        </div>
        <div className="h-1/2 p-4 flex justify-center flex-col">
          <div className="flex items-center justify-between mb-5">
            <img className="w-30" src={UberCarIcon} alt="" />
            <div className="text-right">
              <h2 className="text-lg font-medium">Shoaib</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">
                MP04 B2 1234
              </h4>
              <p className="text-md  text-gray-600">Suzuki Alto</p>
            </div>
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

              <div className="flex items-center gap-5 p-3">
                <i className="ri-currency-line"></i>
                <div>
                  <h3 className="text-lg font-medium">PKR 290</h3>
                  <p className="text-sm -mt-1 text-gray-600">Cash</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full rounded-lg bg-green-700 p-2 text-white font-semibold mt-3">Make a payment</button>
        </div>
      </div>
    </>
  );
};

export default Riding;
