
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardSchedule from "./pages/DashboardSchedule";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardMarketplace from "./pages/DashboardMarketplace";
import DashboardRewards from "./pages/DashboardRewards";
import DashboardReports from "./pages/DashboardReports";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardSupport from "./pages/DashboardSupport";
import AiRecognition from "./pages/AiRecognition";
import SchedulePickup from "./pages/SchedulePickup";
import Education from "./pages/Education";
import Services from "./pages/Services";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/schedule" element={<DashboardSchedule />} />
            <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
            <Route path="/dashboard/marketplace" element={<DashboardMarketplace />} />
            <Route path="/dashboard/rewards" element={<DashboardRewards />} />
            <Route path="/dashboard/reports" element={<DashboardReports />} />
            <Route path="/dashboard/settings" element={<DashboardSettings />} />
            <Route path="/dashboard/support" element={<DashboardSupport />} />
            <Route path="/upload" element={<AiRecognition />} />
            <Route path="/schedule-pickup" element={<SchedulePickup />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
