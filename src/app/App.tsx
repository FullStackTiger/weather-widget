import { WeatherData } from "../components/weather/data";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherData />
    </QueryClientProvider>
  );
}

export default App;
