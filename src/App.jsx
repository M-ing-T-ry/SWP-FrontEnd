import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/LandingPage";
import MainLayout from "./layout/MainLayout";
import { Routers } from "./config/RouterConfig";
// Admin
import EventsPage from "./pages/Admin/Events/EventsPage";
import UserManagementPage from "./pages/Admin/UserManagement/UserManagementPage";

//private router
import AdminRoute from "./routers/AdminRoute";

const adminRoutes = [
  { path: Routers.admin.events.route, element: <EventsPage /> },
  { path: Routers.admin.userManagement.route, element: <UserManagementPage /> },
];

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={Routers.landing.route} element={<Landingpage />} />

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            {adminRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<MainLayout>{route.element}</MainLayout>}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
