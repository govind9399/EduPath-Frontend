import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "./componets/protectedRoute";

// ================= AUTH PAGES =================
import Login from "./pages/Auth/Login";
import AuthLanding from "./pages/auth/AuthenticationEntry";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/auth/resetpassword";
import UserProfileSetup from "./pages/Auth/UserProfileSetup";
import VerifyEmail from "./pages/auth/VerifyEmail";

// ================= STUDENT =================
import { Homepage } from "./pages/student/Home";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { VideoPlayer } from "./pages/student/VideoPlayer";
import { VideoComments } from "./pages/student/CommentSection";
import { CourseDetails } from "./pages/student/VideoDetails";
import { SearchResult } from "./pages/student/SearchResults";
import { YoutubeVideoPlayer } from "./pages/student/youtubeVideoPlayer";

// ================= SEARCH =================
import { CourseCategoryBrowse } from "./pages/search/VideosCategoryBrowse";
import { PersonalizedRecommendation } from "./pages/search/PersonalizedRecommendation";
import { VideoSearch } from "./pages/search/VideoSearch";

// ================= CREATOR =================
import CreatorDashboard from "./pages/educator/creatorDashboard";
import UploadVideo from "./pages/educator/uploadVideo";
import { ChannelSettings } from "./pages/educator/channelSetting";
import { CommentModeration } from "./pages/educator/CommentModeration";
import { MonetizationDashboard } from "./pages/educator/MonetizationDashboard";
import { MonetizationSetting } from "./pages/educator/MonetizationSetting";
import { RevenueAnalyticsReport } from "./pages/educator/RevenueAnalyticsReport";
import { CourseEditior } from "./pages/educator/VideoEditor";
import { VideoDetailsEditor } from "./pages/educator/VideodetailsEditor";
import { ThumbnailEditor } from "./pages/educator/thumbnail";
import { Videos } from "./pages/educator/videos";
import { PlaylistManagementPage } from "./playlist";

// ================= SUPPORT =================
import { FAQArticleDetail } from "./pages/support/FAQArticleDetail";
import { HelpCenterPage } from "./pages/support/HelpCenter";
import { ReportIssuePage } from "./pages/support/ReportIssue";
import { FeedbackPage } from "./pages/support/SendFeedback";
import { FeedbackSuccessPage } from "./pages/support/SubmissionConfirmation";
import { SupportHelpCenterPage } from "./pages/support/support&Help";

// ================= ADMIN =================
import { AdminLogin } from "./pages/admin/Auth/AdminLogin";
import { AdminLayout } from "./pages/admin/Layout/AdminLayout";
import { DashboardHome } from "./pages/admin/Dashboard/DashboardHome";
import { UserManagement } from "./pages/admin/Users/UserManagement";
import { VideoManagement } from "./pages/admin/Videos/VideoManagement";
import { MonetizationPanel } from "./pages/admin/Monetization/MonetizationPanel";
import { IssueReporting } from "./pages/admin/Reports/IssueReporting";
import { PlatformSettings } from "./pages/admin/Settings/PlatformSettings";

// ================= MISC =================
const Unauthorized = () => (
  <div className="h-screen flex items-center justify-center text-xl">
    Unauthorized Access
  </div>
);

export default function App() {
  const router = createBrowserRouter([
    // ========= PUBLIC =========
    { path: "/", element: <AuthLanding /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/verifyemail", element: <VerifyEmail /> },
    { path: "/unauthorized", element: <Unauthorized /> },

    // ========= PROFILE =========
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <UserProfileSetup />
        </ProtectedRoute>
      ),
    },

    // ========= STUDENT =========
    {
      path: "/homepage",
      element: (
        <ProtectedRoute allowedRoles={["student"]}>
          <Homepage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/student-dashboard",
      element: (
        <ProtectedRoute allowedRoles={["student"]}>
          <StudentDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/video-player",
      element: (
        <ProtectedRoute allowedRoles={["student"]}>
          <VideoPlayer />
        </ProtectedRoute>
      ),
    },
    {
      path: "/comment-section",
      element: (
        <ProtectedRoute allowedRoles={["student"]}>
          <VideoComments />
        </ProtectedRoute>
      ),
    },
    {
      path: "/video-details",
      element: (
        <ProtectedRoute allowedRoles={["student"]}>
          <CourseDetails />
        </ProtectedRoute>
      ),
    },
    { path: "/search-result", element: <SearchResult /> },
    { path: "/youtube-player", element: <YoutubeVideoPlayer /> },

    // ========= SEARCH =========
    { path: "/course-category-browse", element: <CourseCategoryBrowse /> },
    { path: "/personalized-recommendation", element: <PersonalizedRecommendation /> },
    { path: "/video-search", element: <VideoSearch /> },

    // ========= CREATOR =========
    {
      path: "/creator-dashboard",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <CreatorDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/upload",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <UploadVideo />
        </ProtectedRoute>
      ),
    },
    {
      path: "/video/:videoId/details",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <VideoDetailsEditor />
        </ProtectedRoute>
      ),
    },
    {
      path: "/video/:videoId/thumbnail",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <ThumbnailEditor />
        </ProtectedRoute>
      ),
    },
    {
      path: "/videos",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <Videos />
        </ProtectedRoute>
      ),
    },
    {
      path: "/playlist-management",
      element: (
        <ProtectedRoute allowedRoles={["educator"]}>
          <PlaylistManagementPage />
        </ProtectedRoute>
      ),
    },

    // ========= SUPPORT =========
    { path: "/support-help", element: <SupportHelpCenterPage /> },
    { path: "/faq-article-detail", element: <FAQArticleDetail /> },
    { path: "/help-center", element: <HelpCenterPage /> },
    { path: "/report-issues", element: <ReportIssuePage /> },
    { path: "/feedback", element: <FeedbackPage /> },
    { path: "/feedback-success", element: <FeedbackSuccessPage /> },

    // ========= ADMIN =========
    { path: "/admin/login", element: <AdminLogin /> },
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardHome /> },
        { path: "dashboard", element: <DashboardHome /> },
        { path: "users", element: <UserManagement /> },
        { path: "videos", element: <VideoManagement /> },
        { path: "monetization", element: <MonetizationPanel /> },
        { path: "reports", element: <IssueReporting /> },
        { path: "settings", element: <PlatformSettings /> },
      ],
    },

    // ========= FALLBACK =========
    { path: "*", element: <Navigate to="/" /> },
  ]);

  return <RouterProvider router={router} />;
}
