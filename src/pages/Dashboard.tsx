import { Fragment } from "react";
import { BaseTile, Header } from "../components/common";
import { DefaultLocationTile } from "../components/common/tiles";

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Fragment>
        <BaseTile className="col-span-1"> My location </BaseTile>
        <DefaultLocationTile />
        <DefaultLocationTile />
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
