import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme-context";
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import "./index.css";
import PrintQueue from "./routes/print-queue/page";
import PrintHistory from "./routes/print-history/page";
import Users from "./routes/users/page";
import PrinterConfig from "./routes/printer-config/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "analytics",
          element: <h1 className="title">Analytics</h1>,
        },
        {
          path: "print-queue",
          element: <PrintQueue />,
        },
        {
          path: "prints-history",
          element: <PrintHistory />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "verified-customers",
          element: <h1 className="title">Verified Customers</h1>,
        },
        {
          path: "printer-config",
          element: <PrinterConfig />,
        },
        {
          path: "new-product",
          element: <h1 className="title">New Product</h1>,
        },
        {
          path: "inventory",
          element: <h1 className="title">Inventory</h1>,
        },
        {
          path: "settings",
          element: <h1 className="title">Settings</h1>,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
