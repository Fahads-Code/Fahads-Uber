import DriverImage from "/src/assets/driver-image.avif"

const CaptianDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-start gap-2">
          <img
            src={DriverImage}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <h4 className="text-lg font-medium">Suhaib Mursaleen</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">PKR 840</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex justify-center gap-5 bg-gray-100 p-5 rounded-lg items-center">
        <div className="text-center">
          <i className="text-2xl font-thin ri-timer-2-line"></i>
          <h4 className="text-lg font-medium">0.5</h4>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-speed-up-fill"></i>
          <h4 className="text-lg font-medium">0.5</h4>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h4 className="text-lg font-medium">0.5</h4>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </>
  );
};

export default CaptianDetails;
