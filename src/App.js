import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router} from "react-router-dom";
 
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Router >
        <Wrapper />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
