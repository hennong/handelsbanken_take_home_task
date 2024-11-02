import { describe, it, expect } from "vitest";
import { Header } from "../../../components/common";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders header component", () => {
    const { getByTestId } = render(<Header />);

    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
  });
});
