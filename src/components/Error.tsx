import React from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { State } from "../repos/store/reducer";

const Error: React.FC = () => {
  const error = useSelector((state: State) => state.error);
  return (
    <Text fontSize="4xl" fontWeight="bold">
      {error}
    </Text>
  );
};

export default Error;
