import React from "react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box>
        <Story />
      </Box>
    </ThemeProvider>
  ),
];
