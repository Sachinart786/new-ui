"use client";
import RateTable from "@/components/BillTable";
import { useState } from "react";

export const PageContainer = () => {
  const [data, setData] = useState([]);
  const saveTableData = (data: any) => {
    setData(data);
  };
  return (
    <div>
      <RateTable product={data} quantity={[]} saveTableData={saveTableData} />
    </div>
  );
};
