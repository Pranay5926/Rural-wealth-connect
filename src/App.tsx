import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleSelection from "./pages/RoleSelection";
import FarmerDashboard from "./pages/farmer/Dashboard";
import AddResidue from "./pages/farmer/AddResidue";
import MyListings from "./pages/farmer/MyListings";
import FarmerOrders from "./pages/farmer/Orders";
import PaymentStatus from "./pages/farmer/PaymentStatus";
import PriceDashboard from "./pages/farmer/PriceDashboard";
import Matchmaking from "./pages/farmer/Matchmaking";
import PickupScheduling from "./pages/farmer/PickupScheduling";
import BuyerDashboard from "./pages/buyer/Dashboard";
import SearchResidues from "./pages/buyer/SearchResidues";
import PostRequirement from "./pages/buyer/PostRequirement";
import BuyerOrders from "./pages/buyer/Orders";
import NegotiationChat from "./pages/buyer/NegotiationChat";
import BuyerAnalytics from "./pages/buyer/Analytics";
import LogisticsDashboard from "./pages/logistics/Dashboard";
import PickupRequests from "./pages/logistics/PickupRequests";
import RouteTracking from "./pages/logistics/RouteTracking";
import DeliveryConfirmation from "./pages/logistics/DeliveryConfirmation";
import VehicleManagement from "./pages/logistics/VehicleManagement";
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import ListingsManagement from "./pages/admin/ListingsManagement";
import OrdersOverview from "./pages/admin/OrdersOverview";
import Analytics from "./pages/admin/Analytics";
import Disputes from "./pages/admin/Disputes";
import Notifications from "./pages/admin/Notifications";
import FinalBanner from "./pages/FinalBanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          
          {/* Farmer Routes */}
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/add-residue" element={<AddResidue />} />
          <Route path="/farmer/listings" element={<MyListings />} />
          <Route path="/farmer/orders" element={<FarmerOrders />} />
          <Route path="/farmer/payment-status" element={<PaymentStatus />} />
          <Route path="/farmer/prices" element={<PriceDashboard />} />
          <Route path="/farmer/matchmaking" element={<Matchmaking />} />
          <Route path="/farmer/pickup" element={<PickupScheduling />} />
          
          {/* Buyer Routes */}
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/search" element={<SearchResidues />} />
          <Route path="/buyer/post-requirement" element={<PostRequirement />} />
          <Route path="/buyer/orders" element={<BuyerOrders />} />
          <Route path="/buyer/chat/:listingId" element={<NegotiationChat />} />
          <Route path="/buyer/analytics" element={<BuyerAnalytics />} />
          
          {/* Logistics Routes */}
          <Route path="/logistics/dashboard" element={<LogisticsDashboard />} />
          <Route path="/logistics/pickup-requests" element={<PickupRequests />} />
          <Route path="/logistics/route-tracking/:pickupId" element={<RouteTracking />} />
          <Route path="/logistics/delivery-confirmation/:pickupId" element={<DeliveryConfirmation />} />
          <Route path="/logistics/vehicles" element={<VehicleManagement />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/listings" element={<ListingsManagement />} />
          <Route path="/admin/orders" element={<OrdersOverview />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/disputes" element={<Disputes />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          
          <Route path="/final" element={<FinalBanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
