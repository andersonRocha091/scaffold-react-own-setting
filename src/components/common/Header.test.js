import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

it("contains 3 NaviLinks via shallow", () => {
  const numlinks = shallow(<Header />).find("NavLink").length;
  expect(numlinks).toEqual(3);
});

it("contains 3 achors via mount", () => {
  const numlinks = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numlinks).toEqual(3);
});
