import {
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const Success: React.FC<{ onClose: () => void; msg: string }> = ({
  onClose,
  msg,
}) => {
  return (
    <div className="container">
      {/* <Flex justifyContent="center"> */}
        <CircularProgress value={100} />
      {/* </Flex> */}
      <div className="content">
        <Typography className="text">{msg}</Typography>
        <Button variant="contained" onClick={onClose}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default Success;
