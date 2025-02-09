import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

// type RowData = {
//   _id: string;
//   taskName: string;
//   description: string;
//   status: string;
// };

export default function DataGridDemo({
  handleDeleteClick,
  rows,
}: {
  handleDeleteClick: (id: string) => void;
  rows: readonly [];
}) {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Product name",
      width: 200,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 700,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      // getActions: ({props}) => {
      //   console.log("props", props);
      //   return [
      //       // if()
      //   ];
      // },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={`delete-${id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick("9")}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={rows.length === 0}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        // checkboxSelection
      />
    </Box>
  );
}
