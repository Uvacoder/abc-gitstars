import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Stack
      direction="row"
      maxWidth="6xl"
      background="gray.300"
      margin="auto"
      width="100%"
      padding={6}
      justifyContent="center"
    >
      <Text color="gray.700" fontSize="xl" fontWeight="bold">
        GITSTARS
      </Text>
    </Stack>
  );
};

export default Navbar;
