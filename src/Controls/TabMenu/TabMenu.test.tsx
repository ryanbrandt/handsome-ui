import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useIsMobile } from "../../hooks";

import TabMenu from "./TabMenu";

jest.mock("../../hooks");
const mockedUseIsMobile = useIsMobile as jest.MockedFunction<
  typeof useIsMobile
>;

describe("TabMenu component", () => {
  const mockTabOne = {
    title: "Tab One",
    key: "tabOne",
    active: true,
  };

  const mockTabTwo = {
    title: "Tab Two",
    key: "tabTwo",
  };

  const MOCK_PROPS = {
    tabs: [mockTabOne, mockTabTwo],
    onTab: jest.fn(),
    onSearch: jest.fn(),
  };

  it("renders", () => {
    render(<TabMenu {...MOCK_PROPS} />);

    expect(screen.getByText(mockTabOne.title)).toBeDefined();
  });

  describe("tabs", () => {
    it("applies tabs.active", () => {
      render(<TabMenu {...MOCK_PROPS} />);

      expect(screen.getByText(mockTabOne.title).classList).toContain(
        "tab_menu_tab-active"
      );
      expect(screen.getByText(mockTabTwo.title).classList).not.toContain(
        "tab_menu_tab-active"
      );
    });

    describe("when mobile", () => {
      beforeAll(() => {
        mockedUseIsMobile.mockReturnValue(true);
      });

      it("renders all tabs in a DropDown", () => {
        render(<TabMenu {...MOCK_PROPS} />);

        expect(screen.getByTestId("dropdown")).toBeDefined();
      });
    });

    describe("when not mobile", () => {
      beforeAll(() => {
        mockedUseIsMobile.mockReturnValue(false);
      });

      it("renders all tabs in a div", () => {
        render(<TabMenu {...MOCK_PROPS} />);

        expect(() => screen.getByTestId("dropdown")).toThrow();
      });
    });
  });

  describe("onTab", () => {
    it("fires onTab with tab[i].key when a tab is clicked", () => {
      render(<TabMenu {...MOCK_PROPS} />);

      userEvent.click(screen.getByText(mockTabTwo.title));

      expect(MOCK_PROPS.onTab).toHaveBeenCalledTimes(1);
      expect(MOCK_PROPS.onTab).toHaveBeenCalledWith(mockTabTwo.key);
    });
  });

  describe("onSearch", () => {
    it("fires onSearch when the input is changed", () => {
      render(<TabMenu {...MOCK_PROPS} />);

      const mockText = "change";
      userEvent.type(screen.getByPlaceholderText("Search"), mockText);

      expect(MOCK_PROPS.onSearch).toHaveBeenCalledTimes(mockText.length);
      expect(MOCK_PROPS.onSearch).toHaveBeenCalledWith(mockText);
    });
  });
});
