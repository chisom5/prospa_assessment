import React from "react";
import { withContext } from "../../../../config/contextConfig";

const CardDownItem = (props) => {
  return (
    <div className={["card__container height", props.last ? 'last': null, props.width ? 'webWidth':null].join(" ")}>
      <div className="card__down__inner">
        <div id="card__inner_top">
          <div>
            <p className="title">{props.title}</p>
          </div>
        </div>

        <div id="card__downItem__inner_down">{props.Component}</div>
      </div>
    </div>
  );
};

export default withContext(CardDownItem);
