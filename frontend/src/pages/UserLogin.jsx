import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/uber-logo.png"
import { useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [userData, setuserData] = useState({});

  const {user, setuser} = useContext(UserDataContext);
  const navigate = useNavigate();

  async function formSubmitted(){
    
    const userData = {
      email: email,
      password: password
    }
    navigate('/home');

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if(response.status === 200){
      const data = response.data;
      setuser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
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
          <img src={uberLogo} className="w-15 mb-10" />
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
          <p className="text-center mt-3">New Here? <Link className="text-blue-600" to="/signUp">Create new account</Link></p>
        </form>
      </div>
      <div className="mt-5 flex">
        <Link className="bg-[#10b461] rounded px-4 py-2 flex justify-center items-center text-white w-full font-semibold" to="/captianLogin">Sign in as captain</Link>
      </div>
      
    </div>
  )
}

export default UserLogin