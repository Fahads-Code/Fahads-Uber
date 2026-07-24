import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptianLogin from "./pages/CaptianLogin";
import CaptianSignup from "./pages/CaptianSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptianHome from "./pages/CaptianHome";
import CaptianProtectWrapper from "./pages/CaptianProtectWrapper";
import Riding from "./pages/Riding";
import CaptianRiding from "./pages/CaptianRiding";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Start />
   },
   {
      path: "/login",
      element: <UserLogin />
   },
   {
      path: "/signUp",
      element: <UserSignup />
   },
   {
      path: "/captianLogin",
      element: <CaptianLogin />
   },
   {
      path: "/captianSignup",
      element: <CaptianSignup />
   },
   {
      path: "/riding",
      element: <Riding />
   },
   {
      path: "/captianRiding",
      element: <CaptianRiding />
   },
   {
      path: "/home",
      element:
         <UserProtectWrapper>
            <Home />
         </UserProtectWrapper>
   },
   {
      path: "/users/logout",
      element: <UserProtectWrapper>
         <UserLogout />
      </UserProtectWrapper>
   },
   {
      path: "/captianHome",
      element: <CaptianProtectWrapper>
         <CaptianHome />
      </CaptianProtectWrapper>
   },
])