import React from "react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-mdi/chevron-left";
import chevronRight from "@iconify/icons-mdi/chevron-right";

require("./style.scss");

const SliderControl = ({ arrowDirection, onClick, hide }) => {
  return (
    <div className={`slider-control ${arrowDirection}`} style={{ visibility: hide ? 'hidden' : 'visible' }} onClick={onClick}>
      <div className="slider-control-arrow" onClick={onClick}>
        <Icon icon={arrowDirection === "right" ? chevronRight : chevronLeft} />
      </div>
    </div>
  );
};

export default SliderControl;
