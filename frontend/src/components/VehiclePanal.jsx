import UberCarIcon from '../assets/uber-icon-removebg-preview.png'
import UberCarIcon2 from '../assets/white-car.png'
import UberBikeIcon1 from '../assets/motorbike.png'

const VehiclePanal = (props) => {
    return (
        <>
            <h3 className='text-2xl font-bold '>Choose a vehicle</h3>
            <h5
            onClick={()=>{
                props.setVehiclePanal(false);
                props.setPanalOpen(false);
            }}
            className='w-full mb-1 flex justify-center items-center text-lg text-gray-500'><i className='ri-arrow-down-wide-line'></i></h5>
            <div 
            onClick={()=>{
                props.setConfirmRidePanal(true);
                props.setVehiclePanal(false);
            }}
            className='flex p-3 mb-2 w-full border-2 border-gray-100 active:border-black rounded-xl items-center justify-between'>
                <div className='w-14 flex justify-center'>
                    <img src={UberCarIcon} className='h-12 w-12 object-contain' />
                </div>
                <div className='w-1/2 ml-3'>
                    <h4 className='text-base font-medium'>UberGo <span><i className='ri-user-3-fill'></i>5</span></h4>
                    <h5 className='text-sm font-medium'>8 mins away</h5>
                    <p className='text-sm font-medium'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>PKR 193</h2>
            </div>

            <div 
            onClick={()=>{
                props.setVehiclePanal(false);
                props.setConfirmRidePanal(true);
            }}
            className='flex p-3 mb-2 w-full border-2 border-gray-100 active:border-black rounded-xl items-center justify-between'>
                <div className='w-14 flex justify-center'>
                    <img src={UberCarIcon2} className='h-12 w-12 object-contain'/>
                </div>
                <div className='w-1/2 ml-3'>
                    <h4 className='text-base font-medium'>UberGo <span><i className='ri-user-3-fill'></i>5</span></h4>
                    <h5 className='text-sm font-medium'>2 mins away</h5>
                    <p className='text-sm font-medium'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>PKR 850</h2>
            </div>

            <div 
            onClick={()=>{
                props.setVehiclePanal(false);
                props.setConfirmRidePanal(true);
            }}
            className='flex p-3 mb-2 w-full border-2 border-gray-100 active:border-black rounded-xl items-center justify-between'>
                <div className='w-14 flex justify-center'>
                    <img src={UberBikeIcon1} className='h-12 w-12 object-contain' />
                </div>
                <div className='w-1/2 ml-3'>
                    <h4 className='text-base font-medium'>Moto <span><i className='ri-user-3-fill'></i>2</span></h4>
                    <h5 className='text-sm font-medium'>11 mins away</h5>
                    <p className='text-sm font-medium'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>PKR 250</h2>
            </div>
        </>
    )
}

export default VehiclePanal