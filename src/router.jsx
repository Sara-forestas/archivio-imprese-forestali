import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ImpresaDetail from "./pages/ImpresaDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/impresa/:id",
    element: <ImpresaDetail />
  }
]);

export default router;