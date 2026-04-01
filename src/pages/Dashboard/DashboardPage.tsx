import { useAuthStore } from "../../store/auth.store";

export function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}
