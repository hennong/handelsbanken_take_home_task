import { Fragment } from "react";
import { BaseTile, Header } from "../components/common";

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Fragment>
        <BaseTile className="col-span-1"> My location </BaseTile>
        <BaseTile className="col-span-1"> Default location 1 </BaseTile>
        <BaseTile className="col-span-1"> Default location 2 </BaseTile>
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
