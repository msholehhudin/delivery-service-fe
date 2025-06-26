import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { transactions } from "@/data";

const Transaction = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};

export default Transaction;
