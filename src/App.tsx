import React from "react";
import { useDispatch } from "react-redux";
import {} from "./repos/store/reducer";
import { loadData } from "./repos/store/actions";
import { Box, Stack } from "@chakra-ui/react";
import _ from "lodash";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadData());
  }, []);
  return (
    <Box width="100%" height="100%">
      <Stack
        direction="column"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Navbar />
        <Main />
      </Stack>
    </Box>
  );
};

export default App;
