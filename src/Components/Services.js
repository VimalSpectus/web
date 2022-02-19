import classes from "./AllCssStyle.module.css";
import React, { useState } from "react";

const Services = () => {
  const [selectedbox, setSelectedBox] = useState("");
  return (
    <div>
      <p className={classes.our_service}>Our Services</p>
      <div>
        <div className={classes.flex}>
          <div>
            <div className={classes.main_text}>
              Lorem Ipsum
              <br />
              simply dummy text
            </div>
            <div className={classes.main_text_second}>
              Lorem Ipsum is simply dummy text of
            </div>
          </div>
        </div>
        <div className={classes.prizeSection_row}>
          <div
            onClick={() => {
              setSelectedBox("1");
            }}
            className={
              selectedbox === "1"
                ? classes.package_select_box_select_box_active
                : classes.package_select_box
            }
          >
            <div className={classes.prizeSection_col2}>
              <p
                className={
                  selectedbox === "1"
                    ? classes.select_image_active
                    : classes.select_image
                }
              />
              <div className={classes.text_center}>
                <div
                  className={
                    selectedbox === "1" ? classes.title_active : classes.title
                  }
                >
                  Basic
                </div>
                <div className={classes.price}>
                  Free
                  <div className={classes.Package_free}>
                    Free work posting :1
                  </div>
                </div>
                <div className={classes.offer}>
                  <div className={classes.offer_title}>
                    Access to waitlist:
                    <span className={classes.packege_icon}>Free</span>
                  </div>
                  <div className={classes.offer_title}>
                    Project Manager worth Rs.999
                  </div>
                </div>
                <button
                  className={classes.button}
                  onClick={() => {
                    setSelectedBox("1");
                  }}
                  className={
                    selectedbox === "1" ? classes.button_active : classes.button
                  }
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedBox("2");
            }}
            className={
              selectedbox === "2"
                ? classes.package_select_box_select_box_active
                : classes.package_select_box
            }
          >
            <div className={classes.prizeSection_col2}>
              <p
                className={
                  selectedbox === "2"
                    ? classes.select_image_active
                    : classes.select_image
                }
              />
              <div className={classes.text_center}>
                <div
                  className={
                    selectedbox === "2" ? classes.title_active : classes.title
                  }
                >
                  Gold
                </div>
                <div className={classes.price}>
                  &#8377;229
                  <div className={classes.Package_free}>
                    Free work posting :5
                  </div>
                </div>
                <div className={classes.offer}>
                  <div className={classes.offer_title}>
                    Access to waitlist:{" "}
                    <span className={classes.packege_icon}>Free</span>
                  </div>
                  <div className={classes.offer_title}>
                    Project Manager worth Rs.999{" "}
                  </div>
                </div>
                <div>
                  <button
                    className={classes.button}
                    onClick={() => {
                      setSelectedBox("2");
                    }}
                    className={
                      selectedbox === "2"
                        ? classes.button_active
                        : classes.button
                    }
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedBox("3");
            }}
            className={
              selectedbox === "3"
                ? classes.package_select_box_select_box_active
                : classes.package_select_box
            }
          >
            <div className={classes.prizeSection_col2}>
              <p
                className={
                  selectedbox === "3"
                    ? classes.select_image_active
                    : classes.select_image
                }
              />
              <div className={classes.text_center}>
                <div
                  className={
                    selectedbox === "3" ? classes.title_active : classes.title
                  }
                >
                  Premium
                </div>
                <div className={classes.price}>
                  &#8377;749{" "}
                  <div className={classes.Package_free}>
                    Free work posting :10
                  </div>
                </div>
                <div className={classes.offer}>
                  <div className={classes.offer_title}>
                    Access to waitlist:
                    <span className={classes.packege_icon}>Paid</span>
                  </div>
                  <div className={classes.offer_title}>
                    Project Manager worth Rs.999
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSelectedBox("3");
                    }}
                    className={
                      selectedbox === "3"
                        ? classes.button_active
                        : classes.button
                    }
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
