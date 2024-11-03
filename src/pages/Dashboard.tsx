import { Fragment } from "react";
import {
  Header,
  DefaultLocationTile,
  MyLocationTile,
} from "../components/common";
import {
  defaultLocationAmsterdam,
  defaultLocationBerlin,
} from "../utils/constants";

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Fragment>
        <MyLocationTile />
        <DefaultLocationTile location={defaultLocationBerlin} />
        <DefaultLocationTile location={defaultLocationAmsterdam} />
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
