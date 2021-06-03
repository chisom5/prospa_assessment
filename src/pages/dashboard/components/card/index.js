import React from "react";
import { withContext } from "../../../../config/contextConfig";
import { CreditCardOutlined } from "@ant-design/icons";

const CardItem = (props) => {
  const iconName = props.title.includes("Current") ? "current" : "savings";

  return (
    <div className={["card__container ", props.last ? 'last': null].join(" ")}>
      <div className="card__inner">
        <div id="card__inner_top">
          <div>
            <p id="title">{props.title}</p>
            <p>{props.subTitle}</p>
          </div>
          <div>
            <div className={iconName}>
              <CreditCardOutlined
                style={{
                  color: props.title.includes("Current")
                    ? "#9e7dff"
                    : "#5ae2ff",
                }}
              />
            </div>
          </div>
        </div>

        <div id="card__inner_down">
          <p>{props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default withContext(CardItem);
