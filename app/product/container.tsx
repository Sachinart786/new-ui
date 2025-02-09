"use client";
import * as React from "react";
import DataGridDemo from "./data-table";
import {
  TextField,
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Modal,
  Alert
} from "@mui/material";
import axios from "axios";
import { get, isEmpty } from "lodash";
import { getProduct } from "@/services/productServices";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  p: 3,
};

export const PageContainer = () => {
  const [products, setProducts] = React.useState<readonly []>([]);
  const [show, setShow] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [id, setId] = React.useState<string>("");
  const [task, setTask] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [taskErr, setTaskErr] = React.useState<string>("");
  const [descErr, setDescErr] = React.useState<string>("");

  const getProducts = async () => {
    try {
      const res = await getProduct();
      if (get(res, "success", false)) {
        setProducts(get(res, "data", []));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const validation = () => {
    let isValid: boolean = true;
    if (isEmpty(task)) {
      isValid = false;
      setTaskErr("This field is required. Please provide task name");
    }
    if (isEmpty(task)) {
      isValid = false;
      setDescErr("This field is required. Please provide description");
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validation()) return;
    try {
      const payload = {
        name: task,
        desc,
      };
      const res = await axios.post("http://localhost:1010/task", payload);
      if (get(res, "data.success", false)) {
        setShow(false);
        setTask("");
        setDesc("");
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async (id: string) => {
    setOpen(true);
    setId(id);
  };

  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:1010/task/${id}`);
    if (get(res, "data.success", false)) {
      getProducts();
      setOpen(false);
      return <Alert severity="success">Deleted Successfully !</Alert>;
    }
  };

  return (
    <div>
      {show && (
        <>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              padding: "24px",
              border: "1px grey",
              borderRadius: "5px",
              backgroundColor: "aliceblue",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", color: "#007bff" }}
            >
              Add New Task
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required"
                  label="Task Name"
                  placeholder="Enter Task Name"
                  value={task}
                  onChange={(e) => {
                    setTask(e.target.value);
                    setTaskErr("");
                  }}
                  error={taskErr ? true : false}
                  helperText={taskErr ? taskErr : ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  id="outlined-multiline-static"
                  label="Description"
                  placeholder="Enter Description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                    setDescErr("");
                  }}
                  error={descErr ? true : false}
                  helperText={descErr ? descErr : ""}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

          <br />

          <Stack direction="row" spacing={2} justifyContent="end">
            <Button
              component="label"
              variant="outlined"
              size="large"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>

            <Button
              component="label"
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </>
      )}

      <br />

      {!show && (
        <>
          <Stack direction="row" spacing={2} justifyContent="end">
            <Button
              variant="contained"
              size="medium"
              onClick={handleSubmit}
              startIcon={<AddIcon />}
            >
              Add Product
            </Button>
          </Stack>
          <br />
          <DataGridDemo rows={products} handleDeleteClick={handleDeleteClick} />

          <Modal
            open={open}
            onClose={() => setOpen(true)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Delete Confirmation
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure want to delete this task ?
              </Typography>
              <br />
              <Stack direction="row" spacing={2} justifyContent="end">
                <Button
                  component="label"
                  variant="outlined"
                  size="large"
                  onClick={() => setOpen(false)}
                >
                  No
                </Button>

                <Button
                  component="label"
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={handleDelete}
                >
                  Yes
                </Button>
              </Stack>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};
