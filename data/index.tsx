import { UserRole } from "@/types/user";
import {
  ArrowRightLeft,
  BarChart2,
  Home,
  Settings,
  Truck,
  User,
  LucideIcon,
} from "lucide-react";

type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const menuItems: Record<UserRole, MenuItem[]> = {
  pharmacy_super_admin: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Transaction",
      url: "/transactions",
      icon: ArrowRightLeft,
    },
    {
      title: "Pharmacy Staff",
      url: "/pharmacys",
      icon: User,
    },
    {
      title: "Couriers",
      url: "/couriers",
      icon: Truck,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BarChart2,
    },
    {
      title: "System Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  pharmacy_admin: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Transaction",
      url: "/transactions",
      icon: ArrowRightLeft,
    },
  ],
  courier: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Transaction",
      url: "/delivery",
      icon: ArrowRightLeft,
    },
  ],
};
