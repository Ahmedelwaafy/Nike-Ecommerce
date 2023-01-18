import HomePage from "./Pages/HomePage";
import Layout from "./components/Utility Components/Layout";
import Missing from "./components/Utility Components/Missing";
import ItemPage from "./components/Utility Components/ItemPage";
import UnderConstruction from "./components/Utility Components/UnderConstruction";
import Loading from "./components/Utility Components/Loading";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyWomen = lazy(() => import("./Pages/Women"));
const LazyMen = lazy(() => import("./Pages/Men"));
const LazyKids = lazy(() => import("./Pages/Kids"));
const LazyCollections = lazy(() => import("./Pages/Collections"));
const names = {
  men: "men",
  women: "women",
  kids: "kids",
  collections: "collections",
  top: "top",
};
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/women"
            element={
              <Suspense fallback={<Loading />}>
                <LazyWomen />
              </Suspense>
            }
          />
          <Route
            path="/men"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMen />
              </Suspense>
            }
          />
          <Route
            path="/kids"
            element={
              <Suspense fallback={<Loading />}>
                <LazyKids />
              </Suspense>
            }
          />
          <Route
            path="/collections"
            element={
              <Suspense fallback={<Loading />}>
                <LazyCollections />
              </Suspense>
            }
          />

          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path="/women/:id" element={<ItemPage type={names.women} />} />
          <Route path="/men/:id" element={<ItemPage type={names.men} />} />
          <Route path="/kids/:id" element={<ItemPage type={names.kids} />} />
          <Route
            path="/collections/:id"
            element={<ItemPage type={names.collections} />}
          />
          <Route path="/top/:id" element={<ItemPage type={names.top} />} />
        </Route>

        <Route path="*" element={<Missing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
