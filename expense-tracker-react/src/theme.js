import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
});

export default theme