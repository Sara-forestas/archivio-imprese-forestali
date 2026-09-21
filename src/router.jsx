import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ImpresaDetail from "./pages/ImpresaDetail";
import Imprese from "./pages/Imprese";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/impresa/:id",
      element: <ImpresaDetail />,
     },
     {
        path: "imprese",
        element: <Imprese />,
     },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;