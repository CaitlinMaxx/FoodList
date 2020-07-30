import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn button btn-lg"].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
