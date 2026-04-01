import { useAuthStore } from "../../store/auth.store";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RequireAuth({ children, fallback = null }: Props) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated());

  if (!isAuthenticated) return <>{fallback}</>;
  return <>{children}</>;
}
