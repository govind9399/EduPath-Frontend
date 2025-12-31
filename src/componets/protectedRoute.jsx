import { Navigate } from "react-router-dom";

/*
  allowedRoles example:
  ["student"]
  ["educator"]
  ["admin"]
*/
export default function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // Decode JWT payload
    const payload = JSON.parse(atob(token.split(".")[1]));

    // Role check
    if (allowedRoles && !allowedRoles.includes(payload.role)) {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    // Invalid token
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
}
