import React from "react";
import { Progress } from "antd";

const Cashflow = (props) => {
  const getIconColor = (num) => {
    switch (num) {
      case 0:
        return "bank_color";
      case 1:
        return "internet_color";

      case 2:
        return "market_color";
      case 3:
        return "transfer_color";
      default:
        return false;
    }
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      {props.data &&
        props.data.map((item, i) => {
          return (
            <div key={item.id} className="cashflow__item">
              <div className="cashflow__item__left">
                <div id="name__icon" className={getIconColor(item.id)}>
                  {item.icon}
                </div>
                <p className="text">{item.name}</p>
              </div>

              <div className="cashflow__item__right">
                <p id="cashflow__item__right_text"> {item.amount}</p>
                <Progress
                  percent={item.percent}
                  showInfo={false}
                  status="warning"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cashflow;
