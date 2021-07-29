import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Paging, { TEST_ID } from "./Paging";

describe("Paging component", () => {
  const MOCK_PROPS = {
    onNext: jest.fn(),
    onPrev: jest.fn(),
    page: 2,
    totalPages: 5,
  };

  it("renders", () => {
    render(<Paging {...MOCK_PROPS} />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });

  describe("paging actions", () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    describe("onNext", () => {
      const getNextBtn = (): HTMLElement => {
        return screen.getByTestId("pagingNext");
      };

      it("fires when page < totalPages", () => {
        render(<Paging {...MOCK_PROPS} />);

        userEvent.click(getNextBtn());

        expect(MOCK_PROPS.onNext).toHaveBeenCalledTimes(1);
      });

      it("does not fire when page === totalPages", () => {
        const disabedNextProps = {
          ...MOCK_PROPS,
          page: 5,
        };

        render(<Paging {...disabedNextProps} />);

        const nextBtn = getNextBtn();
        userEvent.click(nextBtn);

        expect(nextBtn.classList).toContain("page-disabled");
        expect(MOCK_PROPS.onNext).toHaveBeenCalledTimes(0);
      });
    });

    describe("onPrev", () => {
      const getPrevBtn = (): HTMLElement => {
        return screen.getByTestId("pagingPrev");
      };

      it("fires when page > 1", () => {
        render(<Paging {...MOCK_PROPS} />);

        userEvent.click(getPrevBtn());

        expect(MOCK_PROPS.onPrev).toHaveBeenCalledTimes(1);
      });

      it("does not fire when page === 1", () => {
        const disabedPrevProps = {
          ...MOCK_PROPS,
          page: 1,
        };

        render(<Paging {...disabedPrevProps} />);

        const prevBtn = getPrevBtn();
        userEvent.click(prevBtn);

        expect(prevBtn.classList).toContain("page-disabled");
        expect(MOCK_PROPS.onPrev).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("page", () => {
    it("displays the page prop", () => {
      render(<Paging {...MOCK_PROPS} />);

      expect(
        screen.getByText(`${MOCK_PROPS.page} of ${MOCK_PROPS.totalPages}`)
      ).toBeDefined();
    });
  });
});
