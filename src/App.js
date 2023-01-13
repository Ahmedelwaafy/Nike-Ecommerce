import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";
import PagesWrapper from "./Pages/PagesWrapper";
import Layout from "./components/Utility Components/Layout";
import Missing from "./components/Utility Components/Missing";
import UnderConstruction from "./components/Utility Components/UnderConstruction";
import Loading from "./components/Utility Components/Loading";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";


const LazyPagesWrapper = lazy(() => import("./Pages/PagesWrapper"));
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  const men = "men";
  const women = "women";
  const kids = "kids";
  const collections = "collections";
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/women"
              element={
                <Suspense fallback={<Loading/>}>
                  <LazyPagesWrapper page={women} />
                </Suspense>
              }
            />
            <Route
              path="/men"
              element={
                <Suspense fallback={<Loading/>}>
                  <LazyPagesWrapper page={men} />
                </Suspense>
              }
            />
            <Route
              path="/kids"
              element={
                <Suspense fallback={<Loading/>}>
                  <LazyPagesWrapper page={kids} />
                </Suspense>
              }
            />
            <Route
              path="/collections"
              element={
                <Suspense fallback={<Loading/>}>
                  <LazyPagesWrapper page={collections} />
                </Suspense>
              }
            />

            <Route path="/underconstruction" element={<UnderConstruction />} />
          </Route>

          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
