import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RequireAuth;
