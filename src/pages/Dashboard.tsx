import { Fragment } from "react";
import {
  Header,
  DefaultLocationTile,
  MyLocationTile,
  SettingsTile,
} from "../components/common";
import {
  defaultLocationAmsterdam,
  defaultLocationBerlin,
} from "../utils/constants";

function Dashboard() {
  return (
    <Fragment>
      <Header title={"Dashboard"} />
      <Fragment>
        <MyLocationTile />
        <DefaultLocationTile location={defaultLocationBerlin} />
        <DefaultLocationTile location={defaultLocationAmsterdam} />

        <SettingsTile />
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
