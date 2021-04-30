import React from "react";
import _ from "lodash";

import Error from "./Error";
import Toolbar from "./Toolbar";
import List from "./List";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { State } from "../repos/store/reducer";

const Main: React.FC = () => {
  const status = useSelector((state: State) => state.status);
  if (status === "error") return <Error />;

  return (
    <>
      <Toolbar />
      {status === "loading" || status === "initial" ? <Loading /> : <List />}
    </>
  );
};

export default Main;
