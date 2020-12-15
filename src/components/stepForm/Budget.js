
import styles from "./Cart.module.css";
import { Container } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";

class Budget extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    initialInputValue: "1",
    input: {
        0:"0",
        1:"50",
        2:"100",
        3:"200",
        4:"300",
        5:"400",
        6:"500",
        7:"600",
        8:"700",
         9:"800"
    },
    output: {
      plan1: {
        0:["0-10"],
        1:["10-20"],
        2:["20-30"],
        3:["30-40"],
        4:["40-50"],
        5:["50-60"],
        6:["70-80"],
        7:["80-90"],
        8:["90-100"],
        9:["100-110"]
      }
    }
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.input).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = e => {
    this.setState({ initialInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = input => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const inputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + inputOffset + "px";
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.initialInputValue][pos]
      : obj[this.state.initialInputValue];
  };

  render() {
    return (
      <Container>
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <h1><span>Let's talk about budget</span></h1>
            Fill-in the form below
            <br></br>
            DAILY BUDGET
            <br></br>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.initialInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getPricingData(this.state.input)}
          </div>
          <div><Button
         color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => this.props.navigation.previous()}
       >
                   Back
         </Button>
         <Button
          color="primary"
          variant="contained"
          onClick={() => this.props.navigation.next()}>
          Next
        </Button></div>
        </div>
        <div className={styles.cart}>
        <div className={styles.cart__items}>
        </div>
         <div className={styles.cart__summary}>
         <div className={styles.summary__title}>Leads Per Day : <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.output.plan1, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.output.plan1, 1)}
                    </span>
                    {this.getPricingData(this.state.output.plan1, 2)}
                  </div>
                  <div className="pricing-item-price">
                 <span>Cost Per Lead: $2.5-$5</span>
                 </div>
                 <div className="pricing-item-price">
                 <span>Campaign Start Date : {this.props.formData.campaignStartDate}</span>
                 </div>
                 <div className="pricing-item-price">
                 <span>Campaign Start Date : {this.props.formData.campaignEndDate}</span>
                 </div></div>
    </div>
  </div>
      </div>
      </Container>
    );
  }
}

export default Budget;
