"use client";
import Select from "react-select";
import { IconButton, Stack } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";

export const PageContainer = () => {
  const [data, setData] = useState<unknown[]>([]);

  const handleAdd = () => {
    setData([...data, { name: "test", price: "100" }]);
  };
  return (
    <div>
      <Stack justifyContent="end" direction="row" spacing={2}>
        <IconButton aria-label="delete" size="medium" color="primary">
          <AddCircleOutlineRoundedIcon fontSize="inherit" onClick={handleAdd} />
        </IconButton>
      </Stack>
      <Select />
    </div>
  );
};
