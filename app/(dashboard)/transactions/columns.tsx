"use client";

import { Transaction } from "@/types/transactions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "recipient_name",
    header: "Customer Name",
  },
  {
    accessorKey: "recipient_address",
    header: "Address",
  },
  {
    accessorKey: "recipient_phone",
    header: "Phone Number",
  },
  {
    accessorKey: "delivery_date",
    header: "Delivery Date",
  },
  {
    accessorKey: "courier_id",
    header: "Courier",
  },
  {
    accessorKey: "status",
    header: "Delivery Status",
  },
  {
    accessorKey: "payment_status",
    header: "Payment Status",
  },
];
