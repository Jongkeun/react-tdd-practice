import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="jongkeun" name="홍종근" />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props conrrectly", () => {
    const utils = render(<Profile username="jongkeun" name="홍종근" />);
    utils.getByText("jongkeun");
    utils.getByText("(홍종근)");
    utils.getByText(/홍/);
  });
});
