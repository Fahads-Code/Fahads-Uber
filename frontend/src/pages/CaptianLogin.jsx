import { Link, useNavigate } from "react-router-dom";
import uberCaptian from "../assets/uberCaptian.png"
import {  useContext, useState } from "react";
import axios from "axios";
import { captianDataContext } from "../context/CaptianContext";

const UserLogin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {captian, setCaptian} = useContext(captianDataContext);
  const navigate = useNavigate();

 async function formSubmitted(){
    const captianData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captian/login`, captianData);

    if(response.status === 200){
      let data = response.data;
      setCaptian(data.captian);
      localStorage.setItem('token', data.token);
      navigate('/captianHome');
    }

    console.log(captianData);
    setemail('');
    setpassword('');
  }
   
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form onSubmit={function(e){
           e.preventDefault();
           formSubmitted();
        }}>
          <img src={uberCaptian} className="w-15 mb-10" />
          <h3 className="text-lg mb-2">What's your email</h3>
          <input required type="email" placeholder="email@example.com" className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border border-gray-400 w-full text-lg placeholder:text-base"
          value={email}
          onChange={function(details){
            setemail(details.target.value);
          }}
          />
          <h3 className="text-lg mb-2">Enter Password</h3>
          <input required type="password" placeholder="Password" className="bg-[#eeeeee] rounded px-4 mb-7 py-2 border border-gray-400 w-full text-lg placeholder:text-base" 
          value={password}
          onChange={function(details){
            setpassword(details.target.value);
          }}
          />
          <button className="bg-black rounded px-4 py-2 text-white w-full font-semibold">Login</button>
          <p className="text-center mt-3">New Here? <Link className="text-blue-600" to="/captianSignup">Register as a captain</Link></p>
        </form>
      </div>
      <div className="mt-5 flex">
        <Link className="bg-[#10b461] rounded px-4 py-2 flex justify-center items-center text-white w-full font-semibold" to="/login">Sign in as user</Link>
      </div>
      
    </div>
  )
}

export default UserLogin