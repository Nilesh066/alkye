import React from "react";
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Cart.module.css";

export const Review = ({ formData,setForm, navigation }) => {
  const {
    creditCard, cardExpirydate, CVV, phone ,category,
  } = formData;

  return (
    <Container maxWidth='m'>
      <h1>Just a few more details, before you are live</h1>
       Fill-In the form just below.You will be charged at the end of the day.
       <br></br>
       <input type="text"
        placeholder={"CREDIT CARD"}
        name="CREDIT CARD"
        value={creditCard}
        onChange={setForm}
      />
      <input type="date"
        className="cardExpirydate"
        name="cardExpirydate"
        placeholder={"expiry date"}
        value={cardExpirydate}
        onChange={setForm}
        width="100%"
      />
      <input type="text"
        placeholder={"CVV"}
        name="CVV"
        value={CVV}
        onChange={setForm}
      />
      <br/>
      How would you like to receieve the leads?
      <br/>
         <input type="radio" name="leads-receieve" value="Email"/>Email
         <input type="radio" name="leads-receieve" value="Email"/>Connect to my CRM
      <div><Button
         color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() =>navigation.previous()}
       >
                   Back
         </Button>
         <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}>
          Next
        </Button></div>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
        </div>
         <div className={styles.cart__summary}>
         <div className={styles.summary__title}>Leads Per Day : <div className="pricing-item-price">
                  </div>
                  <div className="pricing-item-price">
                 <span>Cost Per Lead: $2.5-$5</span>
                 </div>
                 <div className="pricing-item-price">
                 <span>Campaign Start Date : {formData.campaignStartDate}</span>
                 </div>
                 <div className="pricing-item-price">
                 <span>Campaign Start Date : {formData.campaignEndDate}</span>
                 </div></div>
    </div>
  </div>
    </Container>
  );
};

export default Review;
