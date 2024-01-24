// ButtonComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = () => {
  const buttons = [];

  for (let i = 1; i <= 5; i++) {
    buttons.push(
      <Link key={i} to={`/o/${i}`}>
        <button>{`Card ${i}`}</button>
      </Link>
    );
  }

  return <div>{buttons}</div>;
};

export default ButtonComponent;
