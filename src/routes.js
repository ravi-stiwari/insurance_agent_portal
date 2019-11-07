import LoginView from "views/LoginView.jsx";
import DashboardView from "views/DashboardView.jsx";
import PolicyEditView from "views/PolicyEditView.jsx";
import UserProfile from "views/UserProfile.jsx";

const dashboardRoutes = [
  {
    path: "/",
    component: LoginView,
    name: "Login",
    icon: "pe-7s-user",
    layout: "/login"
  },
  {
    path: "/",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DashboardView,
    layout: "/dashboard"
  },
  {
    path: "/",
    name: "Add New Policy",
    icon: "pe-7s-edit",
    component: PolicyEditView,
    layout: "/editPolicy"
  },
  {
    path: "/",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
