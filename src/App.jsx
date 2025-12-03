
import Login from "./pages/auth/login"
import AuthLanding from "./pages/auth/AuthenticationEntry"
import Register from "./pages/auth/Register"
import ResetPassword from "./pages/auth/resetpassword"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserProfileSetup from "./pages/auth/UserProfileSetup"
import VerifyEmail from "./pages/auth/VerifyEmail"
  import CreatorDashboard from "./pages/educator/creatorDashboard"
import { VideoPlayer } from "./pages/student/VideoPlayer"
import { StudentDashboard } from "./pages/student/StudentDashboard"
import { ChannelSettings } from "./pages/educator/channelSetting"
import { CourseManagement } from "./pages/educator/PlaylistManagement"
import { MonetizationDashboard } from "./pages/educator/MonetizationDashboard"
import { MonetizationSetting } from "./pages/educator/MonetizationSetting"
import { CommentModeration } from "./pages/educator/CommentModeration"
import { RevenueAnalyticsReport } from "./pages/educator/RevenueAnalyticsReport"
import { CourseEditior } from "./pages/educator/VideoEditor"
import UploadVideo from "./pages/educator/uploadVideo"
 import {VideoComments} from "./pages/student/CommentSection"
import { CourseDetails } from "./pages/student/VideoDetails"
import { Homepage } from "./pages/student/Home"
import { SearchResult } from "./pages/student/SearchResults"
import { CourseCategoryBrowse } from "./pages/search/VideosCategoryBrowse"
import { PersonalizedRecommendation } from "./pages/search/PersonalizedRecommendation"
import { VideoSearch } from "./pages/search/VideoSearch"
import { FAQArticleDetail } from "./pages/support/FAQArticleDetail"
import { HelpCenterPage } from "./pages/support/HelpCenter"
import { ReportIssuePage } from "./pages/support/ReportIssue"
import { FeedbackPage } from "./pages/support/SendFeedback"
import { FeedbackSuccessPage } from "./pages/support/SubmissionConfirmation"
import { VideoDetailsEditor } from "./pages/educator/VideodetailsEditor"
import AdBlockerPage from "./pages/advertisement/AdBlockDetection"
import AdImpressionTrigger from "./pages/advertisement/AdImpressionTrigger"
import AdInteractionTrackingPage from "./pages/advertisement/AdInteractionTracking"
import { AdRendering } from "./pages/advertisement/AdRendering"
import {AdminDashboard} from"./pages/admin/adminDashboard"
import {AdminLogin} from"./pages/admin/loginAdmin"
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
        path:"/homepage",
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
         path:"/faq-article-detail",
         element:<FAQArticleDetail/>
       },
       {
         path:"/help-center",
         element:<HelpCenterPage/>
       },
       {
         path:"/report-issues",
         element:<ReportIssuePage/>
       },
       {
         path:"/feedback",
         element:<FeedbackPage/>
       },
       {
         path:"/feedback-success",
         element:<FeedbackSuccessPage/>
       },
       //Advertisement serving 
       {
         path:"/adblock-detection",
         element:<AdBlockerPage/>
       },
       {
         path:"/adimpression-trigger",
         element:<AdImpressionTrigger/>
       },
       {
         path:"/adinteraction-tracking",
         element:<AdInteractionTrackingPage/>
       },
       {
         path:"/adrendring",
         element:<AdRendering/>
       },
       //admin
       {
         path:"/admin",
         element:<AdminDashboard/>
       },
       {
         path:"/admin-login",
          element:<AdminLogin/>
       }
          ])
  return <RouterProvider router={router}/>
}

export default App
