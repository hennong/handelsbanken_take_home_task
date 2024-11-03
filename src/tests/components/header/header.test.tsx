import { describe, it, expect } from "vitest";
import { Header } from "../../../components/common";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("renders header component", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header title={"Test header"} />
      </MemoryRouter>
    );

    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
  });

  it("renders header component with return button", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header title={"Test header"} showReturnButton />
      </MemoryRouter>
    );

    const header = getByTestId("header");
    expect(header).toBeInTheDocument();

    const button = getByTestId("return-button");
    expect(button).toBeInTheDocument();
  });
});
