import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./DigitConverter.css";

function DigitConverter(props) {
  const [convertResult, setConvertResult] = useState("");
  const [digit, setDigit] = useState("");

  const maxlength = 999999999;
  const a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen "
  ];
  const b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];
  const handleSubmit = evt => {
    evt.preventDefault();
    setConvertResult(inWords(digit));
  };

  const checkDisabled = () => {
    if (digit === "" || digit < 1 || digit > maxlength) {
      return true;
    }
    return false;
  };

  const inWords = num => {
    if ((num = num.toString()).length > 9) return "overflow";
    let n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      n[5] != 0
        ? (str != "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + "-" + a[n[5][1]])
        : "";
    return str;
  };

  return (
    <div className="digit_converter">
      <h1>Digit converter</h1>
      <form id="digit_form" onSubmit={handleSubmit}>
        <TextField
          id="digit_input"
          label="Digit"
          type="number"
          name={digit}
          placeholder="Please enter digits"
          onChange={e => setDigit(e.target.value)}
          inputProps={{ "data-testid": "digit_form_input" }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          data-testid="digit_form_submit"
          disabled={checkDisabled()}
        >
          Convert
        </Button>
      </form>
      {convertResult && (
        <div
          className="digit_converter_result"
          data-testid="digit_convert_result"
        >
          <h3>Result</h3>
          {convertResult}
        </div>
      )}
    </div>
  );
}

export default DigitConverter;
