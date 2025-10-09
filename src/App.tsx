import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Konferenzraum from "./pages/Konferenzraum";
import WorkshopRaum from "./pages/WorkshopRaum";
import ExecutiveOffice from "./pages/ExecutiveOffice";
import CoWorkingSpace from "./pages/CoWorkingSpace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/konferenzraum" element={<Konferenzraum />} />
          <Route path="/workshop-raum" element={<WorkshopRaum />} />
          <Route path="/executive-office" element={<ExecutiveOffice />} />
          <Route path="/co-working-space" element={<CoWorkingSpace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
