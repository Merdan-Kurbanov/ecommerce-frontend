import { Navigate } from 'react-router-dom';

interface RoleProtectedRouteProps {
  userRole: string;
  element: React.ReactElement;
}

const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  userRole,
  element
}) => {
  if (userRole === "Admin") {
    return element;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default RoleProtectedRoute;
