import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";
import PagesWrapper from "./Pages/PagesWrapper";
import Layout from "./components/Utility Components/Layout";
import Missing from "./components/Utility Components/Missing";
import UnderConstruction from "./components/Utility Components/UnderConstruction";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
const men ="men"
const women ="women"
const kids ="kids"
const collections ="collections"
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<PagesWrapper page={men} />} />
            <Route path="/women" element={<PagesWrapper page={women} />} />
            <Route path="/kids" element={<PagesWrapper page={kids} />} />
            <Route
              path="/collections"
              element={<PagesWrapper page={collections} />}
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
