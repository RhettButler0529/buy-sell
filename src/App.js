import "./App.scss";
import { useEffect, useState } from "react";
import { Navbar } from "./component/core";
import { routes, protectedRoute } from "./routes";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ErrorBoundary, Footer } from "./component";
import { useSelector, useDispatch } from "react-redux";
import { storeAccountAddress } from "./redux/actions/index";
function App() {
  const account = useSelector((state) => state.account);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allRoutes, setAllRoutes] = useState(routes);
  useEffect(() => {
    if (account) setAllRoutes(protectedRoute);
  }, [account]);

  useEffect(() => {
    const accountLocal = localStorage.getItem("account");
    if (pathname === "/" && (account || accountLocal)) {
      navigate("/dashboard");
    }
    if (!account && accountLocal) {
      setAllRoutes(protectedRoute);
      dispatch(storeAccountAddress(accountLocal));
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <Routes>
          {allRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.title}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
