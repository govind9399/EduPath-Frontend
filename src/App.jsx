 import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { PlaylistManagementPage } from "./playlist";

// ================= AUTH PAGES =================
import Login from "./pages/auth/login";
import AuthLanding from "./pages/auth/AuthenticationEntry";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/auth/resetpassword";
import UserProfileSetup from "./pages/auth/UserProfileSetup";
import VerifyEmail from "./pages/auth/VerifyEmail";

// ================= STUDENT PAGES =================
import { Homepage } from "./pages/student/Home";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { VideoPlayer } from "./pages/student/VideoPlayer";
import { VideoComments } from "./pages/student/CommentSection";
import { CourseDetails } from "./pages/student/VideoDetails";
import { SearchResult } from "./pages/student/SearchResults";
// import { CourseDetails } from "./pages/student/VideoDetails";

// ================= SEARCH =================
import { CourseCategoryBrowse } from "./pages/search/VideosCategoryBrowse";
import { PersonalizedRecommendation } from "./pages/search/PersonalizedRecommendation";
import { VideoSearch } from "./pages/search/VideoSearch";

// ================= CREATOR PAGES =================
import CreatorDashboard from "./pages/educator/creatorDashboard";
import { ChannelSettings } from "./pages/educator/channelSetting";
import { CourseManagement } from "./pages/educator/PlaylistManagement";
import { MonetizationDashboard } from "./pages/educator/MonetizationDashboard";
import { MonetizationSetting } from "./pages/educator/MonetizationSetting";
import { CommentModeration } from "./pages/educator/CommentModeration";
import { RevenueAnalyticsReport } from "./pages/educator/RevenueAnalyticsReport";
import { CourseEditior } from "./pages/educator/VideoEditor";
import UploadVideo from "./pages/educator/uploadVideo";
import { VideoDetailsEditor } from "./pages/educator/VideodetailsEditor";
import { ThumbnailEditor } from "./pages/educator/thumbnail";
import { Videos } from "./pages/educator/videos";
// ================= SUPPORT PAGES =================
import { FAQArticleDetail } from "./pages/support/FAQArticleDetail";
import { HelpCenterPage } from "./pages/support/HelpCenter";
import { ReportIssuePage } from "./pages/support/ReportIssue";
import { FeedbackPage } from "./pages/support/SendFeedback";
import { FeedbackSuccessPage } from "./pages/support/SubmissionConfirmation";

// ================= ADVERTISEMENT =================
import AdBlockerPage from "./pages/advertisement/AdBlockDetection";
import AdImpressionTrigger from "./pages/advertisement/AdImpressionTrigger";
import AdInteractionTrackingPage from "./pages/advertisement/AdInteractionTracking";
import { AdRendering } from "./pages/advertisement/AdRendering";

// ================= ADMIN PAGES =================
import { AdminLogin } from "./pages/admin/Auth/AdminLogin";
import { AdminLayout } from "./pages/admin/Layout/AdminLayout";
import { DashboardHome } from "./pages/admin/Dashboard/DashboardHome";
import { UserManagement } from "./pages/admin/Users/UserManagement";
import { VideoManagement } from "./pages/admin/Videos/VideoManagement";
import { MonetizationPanel } from "./pages/admin/Monetization/MonetizationPanel";
import { IssueReporting } from "./pages/admin/Reports/IssueReporting";
import { PlatformSettings } from "./pages/admin/Settings/PlatformSettings";
import { SupportHelpCenterPage } from "./pages/support/support&Help";
import { YoutubeVideoPlayer } from "./pages/student/youtubeVideoPlayer";
  
export default function App() {

  const [currentAdmin, setCurrentAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("edupath_admin");
    if (storedAdmin) setCurrentAdmin(JSON.parse(storedAdmin));
  }, []);

  const handleAdminLogin = (admin) => {
    localStorage.setItem("edupath_admin", JSON.stringify(admin));
    setCurrentAdmin(admin);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("edupath_admin");
    setCurrentAdmin(null);
  };

  const ProtectedAdminRoute = ({ children }) =>
    currentAdmin ? children : <Navigate to="/admin/login" replace />;

  const router = createBrowserRouter([
    // ========== PUBLIC & AUTH ==========
    { path: "/", element: <AuthLanding /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/profilesetup", element: <UserProfileSetup /> },
    { path: "/verifyemail", element: <VerifyEmail /> },

    // ========== STUDENT ROUTES ==========
    { path: "/homepage", element: <Homepage /> },
    { path: "/student-dashboard", element: <StudentDashboard /> },
    { path: "/video-player", element: <VideoPlayer /> },
    { path: "/comment-section", element: <VideoComments /> },
    // { path: "/course-details", element: <CourseDetails /> },z
    { path: "/search-result", element: <SearchResult /> },
    { path: "/course-category-browse", element: <CourseCategoryBrowse /> },
    { path: "/personalized-recommendation", element: <PersonalizedRecommendation /> },
    { path: "/video-search", element: <VideoSearch /> },
    {path:"/youtube-player", element:<YoutubeVideoPlayer/>},

    // ========== CREATOR ROUTES ==========
    { path: "/creator-dashboard", element: <CreatorDashboard /> },
    { path: "/upload-video", element: <UploadVideo /> },
    { path: "/video-details-editor", element: <VideoDetailsEditor /> },
    // { path: "/playlist-management", element: <CourseManagement /> },
    { path: "/course-editior", element: <CourseEditior /> },
    { path: "/channel-setting", element: <ChannelSettings /> },
    { path: "/comment-moderation", element: <CommentModeration /> },
    { path: "/monetization-dashboard", element: <MonetizationDashboard /> },
    { path: "/revenue-analytics-report", element: <RevenueAnalyticsReport /> },
    { path: "/monetization-setting", element: <MonetizationSetting /> },
    { path:"/thumbnail" , element:<ThumbnailEditor/>},
    { path: "/videos", element:<Videos/>},
    { path: "/video-details", element:<CourseDetails/>},
    { path: "/playlist-management", element: <PlaylistManagementPage /> },

 
    // ========== SUPPORT ROUTES ==========
    {path: "/support-help" , element:<SupportHelpCenterPage/>},
    { path: "/faq-article-detail", element: <FAQArticleDetail /> },
    { path: "/help-center", element: <HelpCenterPage /> },
    { path: "/report-issues", element: <ReportIssuePage /> },
    { path: "/feedback", element: <FeedbackPage /> },
    { path: "/feedback-success", element: <FeedbackSuccessPage /> },

    // ========== ADVERTISEMENT ROUTES ==========
    { path: "/adblock-detection", element: <AdBlockerPage /> },
    { path: "/adimpression-trigger", element: <AdImpressionTrigger /> },
    { path: "/adinteraction-tracking", element: <AdInteractionTrackingPage /> },
    { path: "/adrendring", element: <AdRendering /> },

    // ========== ADMIN ROUTES ==========
    { path: "/admin/login", element: <AdminLogin onLogin={handleAdminLogin} /> },

    {
      path: "/admin",
      element: (
        <ProtectedAdminRoute>
          <AdminLayout adminUser={currentAdmin} onLogout={handleAdminLogout} />
        </ProtectedAdminRoute>
      ),
      children: [
        { index: true, element: <DashboardHome adminRole={currentAdmin?.role} /> },
        { path: "dashboard", element: <DashboardHome adminRole={currentAdmin?.role} /> },
        { path: "users", element: <UserManagement adminRole={currentAdmin?.role} /> },
        { path: "videos", element: <VideoManagement adminRole={currentAdmin?.role} /> },
        { path: "monetization", element: <MonetizationPanel adminRole={currentAdmin?.role} /> },
        { path: "reports", element: <IssueReporting adminRole={currentAdmin?.role} /> },
        { path: "settings", element: <PlatformSettings adminRole={currentAdmin?.role} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
