
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
import { CourseManagement } from "./pages/creator/CourseManagement"
import { MonetizationDashboard } from "./pages/creator/MonetizationDashboard"
import { MonetizationSetting } from "./pages/creator/MonetizationSetting"
import { CommentModeration } from "./pages/creator/CommentModeration"
import { RevenueAnalyticsReport } from "./pages/creator/RevenueAnalyticsReport"
import { CourseEditior } from "./pages/creator/CourseEditor"
import UploadVideo from "./pages/creator/uploadVideo"
import { VideoDetailsEditor } from "./pages/creator/VideodetailsEditior"
 const App=()=> {
     const router=createBrowserRouter([
      //Auth
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

      // Creator

      {
        path:"/creator-dashboard",
        element:<CreatorDashboard/>
      },
       {
         path:"/upload-video",
         element:<UploadVideo/>
      },
      {
         path:"/video-details-editor",
         element:<VideoDetailsEditor/>
      },
      {
         path:"course-management",
         element:<CourseManagement/>
       }, 
        {
         path:"course-editior",
         element:<CourseEditior/>
       },  
        
      { 
        path:"/channel-setting",
         element:<ChannelSettings/> 
      },
       {
         path:"comment-moderation",
         element:<CommentModeration/>
       },     
      {
       path:"monetization-dashboard",
       element:<MonetizationDashboard/>
     },  

       {
         path:"revenue-analytics-report",
         element:<RevenueAnalyticsReport/>
       },
       {
        path:"monetization-setting",
        element:<MonetizationSetting/>
      },     
     
     // learner
       {
         path:"student-dashboard",
        element:<StudentDashboard/>
         },
        {
          path:"video-player",
          element:<V
        }

          ])
  return <RouterProvider router={router}/>
}

export default App
