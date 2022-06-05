import {
  Home,
  Transactions,
  BuyAndSell,
  NotFound,
  Login,
  Dashboard,
  Introduction,
  Dapp,
  Benefits,
  Launchpad,
  Document,
  Directs,
  LevelDividend,
  POIDividend,
  WithdrawDividend,
  Rank,
} from "./component";
export const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/login", element: <Login />, title: "Login" },
  { path: "/introduction", element: <Introduction />, title: "Intro" },
  { path: "/dapp", element: <Dapp />, title: "Dapp" },
  { path: "/benefits", element: <Benefits />, title: "Benefits" },
  { path: "/launchpad", element: <Launchpad />, title: "Launchpad" },
  { path: "/document", element: <Document />, title: "Document" },
  { path: "*", element: <NotFound />, title: "notFound" },
];

export const protectedRoute = [
  { path: "/dashboard", element: <Dashboard />, title: "Home" },
  { path: "/transactions", element: <Transactions />, title: "Transactions" },
  { path: "/buy-sell", element: <BuyAndSell />, title: "buyAndSell" },
  { path: "/directs", element: <Directs />, title: "Directs" },
  { path: "/poi-dividend", element: <POIDividend />, title: "POIDividend" },
  { path: "/rank", element: <Rank />, title: "rank" },
  {
    path: "/withdraw-dividend",
    element: <WithdrawDividend />,
    title: "WithdrawDividend",
  },
  {
    path: "/level-dividend",
    element: <LevelDividend />,
    title: "LevelDividend",
  },
  { path: "*", element: <NotFound />, title: "notFound" },
];
