import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurApproach from "./pages/OurApproach";
import OurExpertise from "./pages/OurExpertise";
import Governance from "./pages/Governance";
import ProjectDelivery from "./pages/ProjectDelivery";
import OngoingProjects from "./pages/OngoingProjects";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import {
  CarbonAssetDevelopment,
  SustainableAgriculturePage,
  SustainableForestryPage,
  PlasticWasteRecycling,
  IntegratedWasteManagement,
  GISRemoteSensing,
} from "./pages/ExpertiseSubPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/our-expertise" element={<OurExpertise />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/project-delivery" element={<ProjectDelivery />} />
            <Route path="/ongoing-projects" element={<OngoingProjects />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/expertise/carbon-asset-development" element={<CarbonAssetDevelopment />} />
            <Route path="/expertise/sustainable-agriculture" element={<SustainableAgriculturePage />} />
            <Route path="/expertise/sustainable-forestry" element={<SustainableForestryPage />} />
            <Route path="/expertise/plastic-waste-recycling" element={<PlasticWasteRecycling />} />
            <Route path="/expertise/integrated-waste-management" element={<IntegratedWasteManagement />} />
            <Route path="/expertise/gis-remote-sensing" element={<GISRemoteSensing />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
