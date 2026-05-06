import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppShell from "@/components/AppShell";
import Home from "@/pages/Home";
import SearchPage from "@/pages/Search";
import Categories from "@/pages/Categories";
import Bookmarks from "@/pages/Bookmarks";
import DisorderDetail from "@/pages/DisorderDetail";
import SymptomExplorer from "@/pages/SymptomExplorer";
import Study from "@/pages/Study";
import NotesPage from "@/pages/Notes";
import ComparePage from "@/pages/Compare";
import SettingsPage from "@/pages/Settings";
import AuthPage from "@/pages/Auth";
import Onboarding from "@/pages/Onboarding";
import Privacy from "@/pages/Privacy";
import ChecklistPage from "@/pages/Checklist";
import CasesPage from "@/pages/Cases";
import RiskPage from "@/pages/Risk";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function ThemeBoot() {
  useEffect(() => {
    const t = localStorage.getItem('theme');
    if (t === 'dark') document.documentElement.classList.add('dark');
  }, []);
  return null;
}

function OnboardingGate() {
  const loc = useLocation();
  const done = typeof window !== 'undefined' && localStorage.getItem('psychref:onboarded') === '1';
  if (!done && loc.pathname !== '/onboarding' && loc.pathname !== '/auth') {
    return <Navigate to="/onboarding" replace />;
  }
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeBoot />
      <BrowserRouter>
        <OnboardingGate />
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<Categories />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/symptom" element={<SymptomExplorer />} />
            <Route path="/study" element={<Study />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/risk" element={<RiskPage />} />
            <Route path="/disorder/:id" element={<DisorderDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
