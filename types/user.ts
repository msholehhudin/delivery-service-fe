export interface User {
    id: number;
    name: string;
    email: string;
    role?: "courier" | "pharmachy_admin" | "pharmacy_super_admin";
}