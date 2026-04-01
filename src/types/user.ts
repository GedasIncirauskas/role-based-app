export type Role = "ADMIN" | "USER" | "VIEWER";

export interface User {
  id: string;
  email: string;
  role: Role;
  token: string;
}
