export const showError = (toaster: any, errorMessage: string) => {
  toaster.show(errorMessage, {
    severity: "error",
    autoHideDuration: 10000,
  });
};

export const showSuccess = (toaster: any, successMessage: string) => {
  toaster.show(successMessage, {
    severity: "success",
    autoHideDuration: 5000,
  });
};

export const showWarning = (toaster: any, warnMessage: string) => {
  toaster.show(warnMessage, {
    severity: "warning",
    autoHideDuration: 5000,
  });
};

export const showInfo = (toaster: any, InfoMessage: string) => {
  toaster.show(InfoMessage, {
    severity: "info",
    autoHideDuration: 5000,
  });
};

// interface Toaster {
//   show: (message: string, options: { severity: string, autoHideDuration: number }) => void;
// }

// type Severity = "error" | "success" | "warning" | "info";

// export const showNotification = (
//   toaster: Toaster,
//   message: string,
//   severity: Severity,
//   autoHideDuration: number = 5000
// ) => {
//   toaster.show(message, {
//     severity,
//     autoHideDuration,
//   });
// };

// export const showError = (toaster: Toaster, errorMessage: string) =>
//   showNotification(toaster, errorMessage, "error", 10000);

// export const showSuccess = (toaster: Toaster, successMessage: string) =>
//   showNotification(toaster, successMessage, "success", 5000);

// export const showWarning = (toaster: Toaster, warnMessage: string) =>
//   showNotification(toaster, warnMessage, "warning", 5000);

// export const showInfo = (toaster: Toaster, infoMessage: string) =>
//   showNotification(toaster, infoMessage, "info", 5000);

