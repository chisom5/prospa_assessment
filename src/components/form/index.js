import React from "react";
import { Button, Radio } from "antd";
import { withContext } from "../../config/contextConfig";
import { useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {CheckOutlined} from '@ant-design/icons';

const FormComponent = (props) => {
  let history = useHistory();

  const navigateToDashboard = () => {
    history.push("/dashboard");
  };
  const triggerChangePhoneNum = (val) => {
    console.log(val);
    props.value.changePhoneNum(val);
  };

  const renderForm = () => {
    if (props.value.path === "/") {
      if (props.value.activeStage === 0) {
        return (
          <section className="form">
            <div className="form__item">
              <input type="text" name="firstName" required />
              <label htmlFor="firstName" className="lable-name">
                <span className="content-name">First name</span>
              </label>
            </div>

            <div className="form__item">
              <input type="text" name="lastName" required />
              <label htmlFor="lastName" className="lable-name">
                <span className="content-name">Last name</span>
              </label>
            </div>

            <div className="form__item">
              <PhoneInput
                countrySelectProps={{ unicodeFlags: true }}
                value={props.value.phoneCode}
                onChange={(e) => triggerChangePhoneNum(e)}
                required
              />

              {/* <label htmlFor="mobileNum" className="lable-name">
                  <span className="content-name">Mobile number</span>
                </label> */}
            </div>

            <div className="form__item">
              <input type="email" name="email" required />
              <label htmlFor="email" className="lable-name">
                <span className="content-name">Email address</span>
              </label>
            </div>

            <div className="form__item">
              <Button
                className="form__btn"
                onClick={() => props.value.changeActiveStage()}
              >
                Next
              </Button>
            </div>
          </section>
        );
      } else {
        return (
          <section className="form">
            <div className="form__item">
              {props.value.openBusinessArr &&
                props.value.openBusinessArr.map((item, i) => {
                  return (
                    <div
                      className={[
                        "business__card ",
                        props.value.businessType === item.id
                          ? "active_business"
                          : null,
                      ].join(" ")}
                      key={item.id}
                      onClick={() => props.value.chooseBusiness(item.id)}
                    >
                      <div className="business__card_top">
                        {/* radio button here */}
                        <span>
                          <Radio
                            className="radio"
                            checked={
                              props.value.businessType === item.id
                                ? true
                                : false
                            }
                          ></Radio>
                        </span>
                        <div>
                          <p className="title">{item.title}</p>
                          {props.value.businessType === item.id && (
                            <div className="desc">{item.desc}</div>
                          )}
                        </div>
                      </div>

                      <div className="business__card_down">
                        {props.value.businessType === item.id &&
                          item.options &&
                          item.options.map((list) => {
                            return (
                              <div className='business__card_down_list' key={list.id}>
                                <div id="check__icon">
                                  <CheckOutlined  style={{color: '#71D683', fontSize: '14px'}}/>
                                </div>

                                <p key={list.id}> {list.name}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="form__item">
              <Button
                className="form__btn"
                onClick={() => navigateToDashboard()}
              >
                Next
              </Button>
            </div>
          </section>
        );
      }
    } else if (props.value.path === "/signIn") {
      return (
        <section className="form">
          <div className="form__item">
            <input type="text" name="email" required />
            <label htmlFor="email" className="lable-name">
              <span className="content-name">Email address</span>
            </label>
          </div>

          <div className="form__item">
            <input type="password" name="firstName" required />
            <label htmlFor="firstName" className="lable-name">
              <span className="content-name">Password</span>
            </label>
          </div>

          <div className="form__item">
            <Button className="form__btn" onClick={() => navigateToDashboard()}>
              Next
            </Button>
          </div>
        </section>
      );
    }
  };
  return (
    <div className="form__container">
      <div className="form__content__inner">
        <h2>{props.title} </h2>
        <span id="description">{props.description}</span>
        {/* form */}
        {renderForm()}
      </div>
    </div>
  );
};
export default withContext(FormComponent);
