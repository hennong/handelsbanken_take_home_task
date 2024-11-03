import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Details from "../../pages/Details";

describe("Details", () => {
  it("renders Details component", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    const header = getByTestId("header");
    expect(header).toBeInTheDocument();

    const button = getByTestId("return-button");
    expect(button).toBeInTheDocument();

    const noDataView = getByTestId("no-data-selected");
    expect(noDataView).toBeInTheDocument();
  });
});
