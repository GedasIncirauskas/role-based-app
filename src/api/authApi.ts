export async function fakeLogin(email: string) {
  return {
    id: "1",
    email,
    token: "fake-jwt-token",
    role: email === "admin@site.com" ? "ADMIN" : "USER",
  };
}
