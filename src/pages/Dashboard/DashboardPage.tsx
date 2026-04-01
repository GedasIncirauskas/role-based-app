import { useAuth } from "../../hooks/useAuth";
import { useRole } from "../../hooks/useRole";

export function DashboardPage() {
  const { user } = useAuth();
  const { isAdmin } = useRole();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}</p>

      {isAdmin && <p>You have ADMIN privileges</p>}
    </div>
  );
}
