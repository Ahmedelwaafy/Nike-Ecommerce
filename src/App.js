import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./components/Wrapper";


function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div>
        <Wrapper />
      </div>
    </QueryClientProvider>
  );
}

export default App;
