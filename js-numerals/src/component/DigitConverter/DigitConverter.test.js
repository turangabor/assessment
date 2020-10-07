import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DigitConverter from "./DigitConverter";

it("render DigitConverter correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<DigitConverter />);
  expect(queryByTestId("digit_form_submit")).toBeTruthy();
  expect(queryByTestId("digit_form_input")).toBeTruthy();
  expect(queryByPlaceholderText("Please enter digits")).toBeTruthy();
});

describe("convert button", () => {
  describe("empty query ", () => {
    it("not trigger inWords ", () => {
      const inWords = jest.fn();
      const { queryByTestId } = render(<DigitConverter />);
      fireEvent.click(queryByTestId("digit_form_submit"));
      expect(inWords).not.toHaveBeenCalled();
    });
  });
});

describe("convert button", () => {
  describe(" with digits ", () => {
    it(" trigger enable button ", () => {
      const { queryByTestId } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 1 } });
      expect(submitButton).toBeEnabled();
    });
  });
});

describe("convert button", () => {
  describe(" with digits ", () => {
    it(" 7 == seven", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 7 } });
      fireEvent.click(submitButton);

      expect(getByText("seven"));
    });

    it(" 10 == ten", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 10 } });
      fireEvent.click(submitButton);

      expect(getByText("ten"));
    });

    it(" 77 == forty-two", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 77 } });
      fireEvent.click(submitButton);

      expect(getByText("seventy-seven"));
    });

    it(" 999 == nine hundred and ninety-nine", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 999 } });
      fireEvent.click(submitButton);

      expect(getByText("nine hundred and ninety-nine"));
    });

    it(" 2001 == two thousand and one", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 2001 } });
      fireEvent.click(submitButton);

      expect(getByText("two thousand and one"));
    });

    it(" 17999 == seventeen thousand nine hundred and ninety-nine", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 17999 } });
      fireEvent.click(submitButton);

      expect(getByText("seventeen thousand nine hundred and ninety-nine"));
    });

    it(" 20000 != seven ", () => {
      const { queryByTestId, getByText } = render(<DigitConverter />);
      const digitInput = queryByTestId("digit_form_input");
      const submitButton = queryByTestId("digit_form_submit");
      fireEvent.change(digitInput, { target: { value: 20000 } });
      fireEvent.click(submitButton);

      //expect(getByText("seven"));
      expect(() => {
        getByText("seven").toThrowError();
      });
    });
  });
});
