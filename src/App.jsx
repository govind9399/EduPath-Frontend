
import Login from "./pages/Auth/login"
import AuthLanding from "./pages/Auth/AuthenticationEntry"
import Register from "./pages/auth/Register"
import ResetPassword from "./pages/Auth/resetpassword"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserProfileSetup from "./pages/Auth/UserProfileSetup"
import VerifyEmail from "./pages/Auth/VerifyEmail"
import Homepage from "./pages/courseHomepage"
 import CreatorDashboard from "./pages/creator/creatorDashboard"
import { VideoPlayer } from "./pages/learner/VideoPlayer"
import { StudentDashboard } from "./pages/learner/StudentDashboard"
import { ChannelSettings } from "./pages/creator/channelSetting"
 const App=()=> {
     const router=createBrowserRouter([
      {
        path:"/",
        element:<AuthLanding/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/reset-password",
        element:<ResetPassword/>
      },
      {
        path:"/profilesetup",
        element:<UserProfileSetup/>
      },
      {
         path:"/verifyemail",
         element:<VerifyEmail/>
      },
      {
        path:"/coursehomepage",
        element:<Homepage/>
      },
      {
        path:"/videoplayer",
        element:<VideoPlayer/>
      },
      {
        path:"/creator-dashboard",
        element:<CreatorDashboard/>
      },
      { 
        path:"/channel-setting",
         element:<ChannelSettings/> 
        },
      //  { path:"/upload-video", element:<UploadVideo/> },
       {
         path:"student-dashboard",
        element:<StudentDashboard/>
         }
     ])
  return <RouterProvider router={router}/>
}

export default App
