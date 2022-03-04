import Dashboard from "../../pages/Lawyer/Dashboard/Dashboard";
import LawyerProfile from "../../pages/Lawyer/Profile/Profile";
import Chat from "../../pages/Common/Chat/Chat";

export const LAWYER_ROUTES = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: (props) => <Dashboard {...props} />,
  },
  {
    path: "/profile",
    name: "Profile",
    component: (props) => <LawyerProfile {...props} />,
  },
  {
    path: "/chat",
    name: "Chat",
    component: (props) => <Chat {...props} />,
  },
];
