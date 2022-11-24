import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSkeleton: {
      defaultProps: {
        variant: "rounded",
      },
      styleOverrides: {
        root: {},
      },
    },
  },
  typography: {
    subtitle1: {
      fontSize: 24,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#6495ED",
      dark: "#9995ED",
      contrastText: "#fff",
    },
    grey: {
      100: "#F8F8F8",
      200: "#DFDFDF",
      400: "#F4F6F9",
      500: "#555",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
});
