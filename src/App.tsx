
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import MandatoryDisclosures from "./pages/Mandatory-Disclosures";
import AllEvents from "./pages/All-Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/programs" element={<Layout><Programs /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/campus" element={<Layout><Campus /></Layout>} />
          <Route path="/all-events" element={<Layout><AllEvents /></Layout>} />
          <Route path="/mandatory-disclosures" element={<Layout><MandatoryDisclosures /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
