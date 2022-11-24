import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { Header } from "../components/Header/Header";

type LayoutProps = { children?: ReactNode };

export const MainLayout = (props: LayoutProps) => {
  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <Header />
      {props.children}
    </Container>
  );
};
