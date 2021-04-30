import React from "react";
import { Stack, Text, Button, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { filter, loadData } from "../repos/store/actions";
import { State } from "../repos/store/reducer";

const Toolbar: React.FC = () => {
  const [term, setTerm] = React.useState<string>("");
  const current_page = useSelector((state: State) => state.current_page);
  const total_count = useSelector((state: State) => state.total_count);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (total_count === 0) return;
    const timer = setTimeout(() => dispatch(filter(term)), 300);
    return () => clearTimeout(timer);
  }, [term]);

  function nextPage() {
    dispatch(loadData(current_page + 1));
  }
  function prevPage() {
    dispatch(loadData(current_page - 1));
  }

  return (
    <Stack
      position="sticky"
      top={0}
      zIndex={9999}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      marginY={8}
      backgroundColor="gray.100"
      maxWidth="6xl"
      width="100%"
      padding={4}
    >
      <Input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="enter your search"
        background="white"
        variant="outline"
        maxWidth="md"
        disabled={total_count == 0}
      />
      <Stack alignItems="center" direction="row">
        <Button
          colorScheme="gray"
          fontSize="xs"
          onClick={prevPage}
          disabled={total_count === 0 || current_page === 1}
        >
          Prev. page
        </Button>
        <Text fontSize="sm" fontWeight="bold">
          {current_page} of {Math.round(total_count / 30)}
        </Text>
        <Button
          colorScheme="gray"
          fontSize="xs"
          onClick={nextPage}
          disabled={total_count === 0}
        >
          Next page
        </Button>
      </Stack>
    </Stack>
  );
};

export default Toolbar;
