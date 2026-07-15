import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uberCaptian.png";
import { useContext, useState } from "react";
import { captianDataContext } from "../context/CaptianContext";
import axios from "axios";

const CaptianSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const navigate = useNavigate();
  const { captian, setCaptian } = useContext(captianDataContext);

  async function formSubmitted() {
    const captianData = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        type: vehicleType 
      }
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captian/register`, captianData);
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        setCaptian(data.captian);
        localStorage.setItem('token', data.token);
        navigate('/captianLogin');
        setemail('');
        setpassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehicleCapacity('');
        setVehiclePlate('');
        setVehicleType('');
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="p-6 min-h-screen flex flex-col justify-between bg-white max-w-lg mx-auto">
      <div>
        <div className="mb-8">
          <img src={uberLogo} className="w-15" alt="Uber Logo" />
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          formSubmitted();
        }}>

          <h3 className="text-base font-medium mb-2 text-gray-800">What's your name</h3>
          <div className="flex gap-4 mb-4">
            <input
              required
              type="text"
              placeholder="First Name"
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-1/2 text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-1/2 text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2 text-gray-800">What's your email</h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            className="bg-[#f3f3f3] rounded mb-4 px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2 text-gray-800">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="Password"
            className="bg-[#f3f3f3] rounded px-4 mb-5 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <h3 className="text-base font-medium mb-2 text-gray-800">Vehicle Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Vehicle Plate"
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            <input
              required
              type="number"
              placeholder="Vehicle Capacity"
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button type="submit" className="bg-black hover:bg-gray-800 transition rounded px-4 py-3 text-white w-full font-semibold text-lg">
            Create Captain Account
          </button>

          <p className="text-center mt-4 text-gray-600 text-sm">
            Already have an account? <Link className="text-blue-600 font-medium hover:underline" to="/captianLogin">Login here</Link>
          </p>
        </form>
      </div>

      <div className="mt-8 mb-4">
        <p className="text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the <span className="underline cursor-pointer">Google Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptianSignup;