import { useAuthStore } from "../store/auth.store";

export function useRole() {
  const user = useAuthStore((s) => s.user);

  return {
    role: user?.role,
    isAdmin: user?.role === "ADMIN",
    isUser: user?.role === "USER",
    isViewer: user?.role === "VIEWER",
  };
}
