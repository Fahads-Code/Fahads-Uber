const LocationSearchPanal = (props) => {
  const locations = [
    "House No. 45, Street 12, Phase 4, D.H.A.",
    "Flat No. B-3, Block 7, Gulshan-e-Iqbal, Karachi",
    "Shop No. 15, Main Tariq Road, P.E.C.H.S., Karachi",
    "House No. 22-A, Sector 11-F, North Karachi, Karachi",
  ];

  return (
    <div className="[@media(max-height:670px)]:mt-5">
      {locations.map(function (element, elementId) {
        return (
          <div
            key={elementId}
            onClick={() => {
              props.setPanalOpen(false);
              props.setVehiclePanal(true);
            }}
            className="flex border-2 border-gray-100 p-3 my-2 rounded-xl active:border-black justify-start items-center gap-4"
          >
            <h2 className="bg-[#eee] h-10 flex justify-center items-center w-12 p-1 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4>{element}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanal;
