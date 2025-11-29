
import Login from "./pages/Auth/login"
import AuthLanding from "./pages/Auth/AuthenticationEntry"
import Register from "./pages/auth/Register"
import ResetPassword from "./pages/Auth/resetpassword"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserProfileSetup from "./pages/Auth/UserProfileSetup"
import VerifyEmail from "./pages/Auth/VerifyEmail"
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
import VideoComments from "./pages/learner/CommentSection"
import { CourseDetails } from "./pages/learner/CourseDetails"
import { Homepage } from "./pages/learner/CourseHome"
import { SearchResult } from "./pages/learner/SearchResults"
import { CourseCategoryBrowse } from "./pages/search/CourseCategoryBrowse"
import { PersonalizedRecommendation } from "./pages/search/PersonalizedRecommendation"
import { VideoSearch } from "./pages/search/VideoSearch"
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
         path:"/course-management",
         element:<CourseManagement/>
       }, 
        {
         path:"/course-editior",
         element:<CourseEditior/>
       },  
        
      { 
        path:"/channel-setting",
         element:<ChannelSettings/> 
      },
       {
         path:"/comment-moderation",
         element:<CommentModeration/>
       },     
      {
       path:"/monetization-dashboard",
       element:<MonetizationDashboard/>
     },  

       {
         path:"/revenue-analytics-report",
         element:<RevenueAnalyticsReport/>
       },
       {
        path:"/monetization-setting",
        element:<MonetizationSetting/>
      },     
     
     // learner
       {
         path:"/student-dashboard",
        element:<StudentDashboard/>
         },
        {
          path:"/comment-section",
          element:<VideoComments/>
        },
        {
          path:"/course-details",
          element:<CourseDetails/>
        },
        {
          path:"/homepage",
          element:<Homepage/>
        },
        {
          path:"/video-player",
          element:<VideoPlayer/>
        },
        {
          path:"/search-result",
          element:<SearchResult/>
        },
        //Search
        {
          path:"/course-category-browse",
          element:<CourseCategoryBrowse/>
        },
        {
          path:"/personalized-recommendation",
          element:<PersonalizedRecommendation/>
        },
        {
           path:"/video-search",
           element:<VideoSearch/>
        },
        // Support
       {
         path:"/"
       }
          ])
  return <RouterProvider router={router}/>
}

export default App
