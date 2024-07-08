import { useState } from "react";
import { Tooltip } from "react-tooltip";

import "./PasswordDisplay.css";

export default PasswordDisplay = ({ password }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipContent, setTooltipContent] = useState(
    "Click to copy Password"
  );

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  return (
    <>
      <input
        key={password}
        id="password-display"
        type="text"
        value={password}
        readOnly
        onClick={(event) => {
          const { value: password } = event.target;
          copyToClipboard(password);
          setTooltipContent("Password Copied!");
        }}
        data-tooltip-id="my-tooltip"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
          setTooltipContent("Click to copy Password");
        }}
      />
      <Tooltip
        id="my-tooltip"
        content={password ? tooltipContent : ""}
        isOpen={isOpen}
      />
    </>
  );
};
