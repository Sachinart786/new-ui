"use client";
import Select from "react-select";
import { Card, Grid, IconButton, Stack, TextField } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";

export const PageContainer = () => {
  const [data, setData] = useState<unknown[]>([]);
  console.log("data", data);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  const handleAdd = () => {
    setData([...data, { name, price, quantity }]);
    setName("");
    setPrice("");
    setQuantity("");
  };
  return (
    <>
      <Stack justifyContent="end" direction="row" spacing={2}>
        <IconButton aria-label="delete" size="medium" color="primary">
          <AddCircleOutlineRoundedIcon fontSize="inherit" onClick={handleAdd} />
        </IconButton>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            placeholder="Enter Name"
            label="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            placeholder="Enter Quantity"
            label="Quantity"
            size="small"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            placeholder="Enter Price"
            label="Price"
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <br />
      <hr />
      <br />

      {data &&
        data.length > 0 &&
        data.map((item: any, index: number) => {
          const { name, price, quantity } = item;
          return (
            <Card
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "12px",
                padding: "20px",
              }}
            >
              <p>{name}</p>
              <p>{price}</p>
              <p>{quantity}</p>
            </Card>
          );
        })}
    </>
  );
};
