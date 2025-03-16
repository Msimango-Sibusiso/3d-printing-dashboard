import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import PrivateRoute from "./routes/private-router"; // Import PrivateRoute
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import PrintQueue from "./routes/print-queue/page";
import PrintHistory from "./routes/print-history/page";
import Users from "./routes/users/page";
import PrinterConfig from "./routes/printer-config/page";
import Auth from "./(auth)//layout";
import AddUser from "./routes/add-user/page";
import { Toaster } from "sonner";
import Test from "./test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing Page (Public) */}
      <Route
        path="/"
        element={<Auth />}
      />

      <Route
        path="/test"
        element={<Test />}
      />

      {/* Dashboard (Protected) */}

      <Route element={<PrivateRoute element={<Layout />} />}>
        <Route
          path="dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="print-queue"
          element={<PrintQueue />}
        />
        <Route
          path="prints-history"
          element={<PrintHistory />}
        />
        <Route
          path="users"
          element={<Users />}
        />
        <Route
          path="add-user"
          element={<AddUser />}
        />
        <Route
          path="printer-config"
          element={<PrinterConfig />}
        />
        <Route
          path="new-product"
          element={<h1 className="title">New Product</h1>}
        />
        <Route
          path="inventory"
          element={<h1 className="title">Inventory</h1>}
        />
        <Route
          path="settings"
          element={<h1 className="title">Settings</h1>}
        />
        {/* Catch-all route to prevent 404s inside the dashboard */}
        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Route>

      {/* Catch-all route for other undefined pages */}
      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />
    </>,
  ),
);

function App() {
  return (
    <ThemeProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
