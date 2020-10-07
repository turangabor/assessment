import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Digit_converter.css";

function Digit_converter() {
  return (
    <div className="digit_converter">
      <h1>Digit converter</h1>
      <form id="digit_form">
        <TextField
          id="digit_input"
          label="Digit"
          type="number"
          InputProps={{
            inputProps: {
              min: 0
            }
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button variant="contained" color="secondary">
          Convert
        </Button>
      </form>
      <div className="digit_converter_result">
        <h3>Result</h3>
      </div>
    </div>
  );
}

export default Digit_converter;
