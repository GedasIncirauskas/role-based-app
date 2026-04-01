import { useAuthStore } from "../../store/auth.store";
import type { Role } from "../../types/user";

interface Props {
  role: Role | Role[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RequireRole({ role, children, fallback = null }: Props) {
  const user = useAuthStore((s) => s.user);

  if (!user) return <>{fallback}</>;

  const allowedRoles = Array.isArray(role) ? role : [role];

  if (!allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
