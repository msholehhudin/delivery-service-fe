import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/context/ProtectedRoute";

export default function DashboardLayout({ children }: any) {
  return (
    // <ProtectedRoute>
    <div className="flex">
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
    // </ProtectedRoute>
  );
}
