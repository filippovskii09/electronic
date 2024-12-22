import { routerType } from "../types/router.types";
import HomeView from "../views/HomeView";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <HomeView />,
    title: "home",
  },
];

export default pagesData;
