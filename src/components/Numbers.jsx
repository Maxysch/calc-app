import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const renderButtons = (onClickNumber) => {
  let i;
  <Button text={i} clickHandler={onClickNumber} />;
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
