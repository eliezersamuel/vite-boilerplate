import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import CustomRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <CustomRoutes />
            </NuqsAdapter>
        </QueryClientProvider>
    );
}

export default App;
