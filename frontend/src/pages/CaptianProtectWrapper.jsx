import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { captianDataContext } from "../context/CaptianContext";
import axios from "axios";

const CaptianProtectWrapper = ({ children }) => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { captian, setCaptian } = useContext(captianDataContext);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captian/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        setCaptian(response.data.captian);
        setIsLoading(false);
      }
    }).catch((error) => {
      console.log(error);
      localStorage.removeItem('token');
      navigate('/captianLogin');
    })
  }, [token, navigate, setCaptian])

  if (loading) {
    return (
      <div>Loading....</div>
    )
  };

  if (!token) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default CaptianProtectWrapper
