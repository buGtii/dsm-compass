import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<Categories />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/symptom" element={<SymptomExplorer />} />
            <Route path="/study" element={<Study />} />
            <Route path="/disorder/:id" element={<DisorderDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
