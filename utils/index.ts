// import { Alert } from "@mui/material";

// interface ShowSuccessProps {
//   message: string;
//   onClose?: () => void;
// }

// export const ShowSuccess: React.FC<ShowSuccessProps> = ({
//   message,
//   onClose,
// }) => {
//   return (
//     <Alert severity="success" color="success">
//       {message}
//     </Alert>
//   );
// };

import { Alert } from "@mui/material";

interface ShowSuccessProps {
  message: string;
  onClose?: () => void;
}

export const ShowSuccess: React.FC<ShowSuccessProps> = ({
  message,
  onClose,
}) => {
  return (
    <Alert severity="success" onClose={onClose}>
      {message}
    </Alert>
  );
};

