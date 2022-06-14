import { Box } from "@mui/material";
import React from "react";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Main = () => {
  return (
    <Box>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};
export default Main;
