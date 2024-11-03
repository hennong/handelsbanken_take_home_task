import { Fragment } from "react";
import { Header, BaseTile } from "../components/common";

function Details() {
  return (
    <Fragment>
      <Header title={"Details"} showReturnButton />
      <Fragment>
        <BaseTile>
          <div>Temperature</div>
        </BaseTile>
        <BaseTile className="col-span-2">
          <div>Weather Details</div>
        </BaseTile>
      </Fragment>
    </Fragment>
  );
}

export default Details;
