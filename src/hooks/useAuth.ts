import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "@tanstack/react-router";

export function useAuth() {
  const { user, login, logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    navigate({ to: "/login" });
  };

  return {
    user,
    login,
    logout: logoutAndRedirect,
    isAuthenticated,
  };
}
