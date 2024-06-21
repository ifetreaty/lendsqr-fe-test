import { render } from "@testing-library/react";
import UsersPage from "../../../../pages/UsersPage";
import "./CustomCard.scss";

import "@testing-library/jest-dom";

describe("UsersPage Component", () => {
  test("renders UsersPage component correctly", () => {
    const { getByText, getByTestId } = render(<UsersPage />);

    expect(getByText("Users")).toBeInTheDocument();

    expect(getByTestId("business-stats")).toBeInTheDocument();

    expect(getByTestId("user-table")).toBeInTheDocument();
  });
});
