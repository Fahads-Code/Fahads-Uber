import uberLogo from "../assets/uber-logo.png"
import uberBackground from "../assets/uber-background.webp";
import { Link } from "react-router-dom";

const Start = ()=> {
  return (
    <>                  
      <div className="w-full bg-cover bg-center bg-no-repeat pt-8 h-screen flex justify-between flex-col"
      
      style={{backgroundImage: `url(${uberBackground})`}}
      >
        <img className="ml-8 w-15" src={uberLogo} alt="Uber Logo" />
        <div className="bg-white py-3 px-5">
           <h2 className="text-2xl font-bold">Get started with Uber</h2>
           <Link className="w-full bg-black text-white py-3 justify-center flex rounded mt-7" to="/login">Continue</Link>
        </div>
      </div>
    </>
  )
}

export default Start