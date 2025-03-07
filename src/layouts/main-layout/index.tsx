import { Outlet } from "react-router-dom";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth-store";
import { useEffect } from "react";
import Header from "./header";
import Menu from "./menu";

export default function MainLayout() {
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      window.location.replace("/login");
    }
  }, [token]);
  return (
    <SidebarProvider>
      <Menu />
      <SidebarInset>
        <Header />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
