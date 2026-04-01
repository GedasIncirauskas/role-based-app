import { useState } from "react";
import { fakeLogin } from "../../api/authApi";
import { useAuthStore } from "../../store/auth.store";
import { useNavigate } from "@tanstack/react-router";
import type { User, Role } from "../../types/user";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = await fakeLogin(email);
    const user: User = { ...userData, role: userData.role as Role };
    login(user);
    navigate({ to: "/" });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
