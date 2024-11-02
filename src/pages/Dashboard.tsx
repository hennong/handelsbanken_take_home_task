import { Fragment } from "react";
import { BaseTile, Header, DefaultLocationTile } from "../components/common";
import {
  defaultLocationAmsterdam,
  defaultLocationBerlin,
} from "../utils/constants";

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Fragment>
        <BaseTile className="col-span-1"> My location </BaseTile>
        <DefaultLocationTile location={defaultLocationBerlin} />
        <DefaultLocationTile location={defaultLocationAmsterdam} />
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
