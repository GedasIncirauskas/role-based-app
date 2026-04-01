import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "@tanstack/react-router";

import { LoginPage } from "../pages/Login/LoginPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { AdminPage } from "../pages/Admin/AdminPage";
import { useAuthStore } from "../store/auth.store";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    if (!useAuthStore.getState().isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user?.role !== "ADMIN") {
      throw redirect({ to: "/" });
    }
  },
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}
