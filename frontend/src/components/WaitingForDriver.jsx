import UberCarIcon from '../assets/uber-icon-removebg-preview.png'

const WaitingForDriver = (props) => {
  return (
    <>
      <div>
        <h5
          onClick={() => {
            // props.setVehicleFound(false); 
            props.setWaitingForDriver(false);
            
          }}
          className="w-full flex justify-center items-center font-bold text-lg text-gray-600"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>

        <div className='flex items-center justify-between mb-5'>
          <img className='w-30' src={UberCarIcon} alt="" />
          <div>
            <h2 className='text-lg font-medium'>Shoaib</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 B2 1234</h4>
            <p className='text-sm text-gray-600'>Suzuki Alto</p>
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
      </div>
    </>
  );
};

export default WaitingForDriver;
