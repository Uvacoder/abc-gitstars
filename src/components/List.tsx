import React from "react";

import { Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../repos/store/reducer";
import { loadData } from "../repos/store/actions";
import _ from "lodash";
import Card from "./Card";

const List: React.FC = () => {
  const repos = useSelector((state: State) => state.repos);

  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",

        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      paddingY={12}
      columnGap={4}
      rowGap={12}
    >
      {repos.map((repo) => (
        <Card repo={repo} key={repo.id} />
      ))}
    </Grid>
  );
};

export default List;
