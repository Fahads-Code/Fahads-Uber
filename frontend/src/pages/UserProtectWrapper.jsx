import { useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserContext"
import { useEffect } from "react";


const UserProtectWrapper = ({children}) => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  }, [token, navigate])

  if(!token){
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
