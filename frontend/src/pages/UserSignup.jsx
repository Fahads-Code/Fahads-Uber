import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png";
import { useContext, useState } from "react";
import axios from 'axios';
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [userData, setUserData] = useState({});

  const {user, setuser} = useContext(UserDataContext);
  const navigate = useNavigate();


 async function formSubmitted() {
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser); // yeh woh data hai, newUser object, jo ham server pr bhej rahe hain
    
    if(response.status === 200){
       let data = response.data;
       setuser(data.user);
       localStorage.setItem('token', data.token);
       navigate("/login");
    }

    setemail('');
    setpassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className="p-6 min-h-screen flex flex-col justify-between bg-white">
      <div>
        <div className="mb-8">
          <img src={uberLogo} className="w-20" alt="Uber Logo" />
        </div>

        <form onSubmit={function(e) {
           e.preventDefault();
           formSubmitted();
        }}>

          <h3 className="text-base font-medium mb-2 text-gray-800">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input 
              required 
              type="text" 
              placeholder="First Name" 
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-1/2 text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={firstName}
              onChange={function(details) {
                setFirstName(details.target.value);
              }}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="bg-[#f3f3f3] rounded px-4 py-2.5 border border-gray-300 w-1/2 text-lg placeholder:text-sm focus:outline-none focus:border-black"
              value={lastName}
              onChange={function(details) {
                setLastName(details.target.value);
              }}
            />
          </div>

          <h3 className="text-base font-medium mb-2 text-gray-800">What's your email</h3>
          <input 
            required 
            type="email" 
            placeholder="email@example.com" 
            className="bg-[#f3f3f3] rounded mb-5 px-4 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black"
            value={email}
            onChange={function(details) {
              setemail(details.target.value);
            }}
          />

          <h3 className="text-base font-medium mb-2 text-gray-800">Enter Password</h3>
          <input 
            required 
            type="password" 
            placeholder="Password" 
            className="bg-[#f3f3f3] rounded px-4 mb-6 py-2.5 border border-gray-300 w-full text-lg placeholder:text-sm focus:outline-none focus:border-black" 
            value={password}
            onChange={function(details) {
              setpassword(details.target.value);
            }}
          />

          <button className="bg-black hover:bg-gray-800 transition rounded px-4 py-3 text-white w-full font-semibold text-lg">
            Create Account
          </button>

          <p className="text-center mt-4 text-gray-600 text-sm">
            Already have an account? <Link className="text-blue-600 font-medium hover:underline" to="/login">Login here</Link>
          </p>
        </form>
      </div>

       <div className="mt-8 mb-4">
        <p className="text-[10px] leading-tight"
        >By proceeding, you cannot to get calls, watsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided</p>
      </div>
    </div>
  );
};

export default UserSignup;