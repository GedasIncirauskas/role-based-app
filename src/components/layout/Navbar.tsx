import { Link } from "@tanstack/react-router";
import { useAuth } from "../../hooks/useAuth";
import { RequireRole } from "../auth/RequireRole";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>

      <RequireRole role="ADMIN">
        <Link to="/admin">Admin</Link>
      </RequireRole>

      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
