import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { InitialPage } from "../pages/initialPage/InitialPage";
import { Services } from "../pages/services/Services";
import { Housing } from "../pages/housing/Housing";
import { HousingDetails } from "../pages/housingdetails/HousingDetails";
import { ContactMe } from "../pages/contactMe/ContactMe";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { Favorites } from "../pages/housing/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <InitialPage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/housing",
        element: <Housing />,
      },
      {
        path: "/housingDetails/:typeId",
        element: <HousingDetails />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
