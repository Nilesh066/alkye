
import React,{useEffect} from "react";
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Cart.module.css";

export const Submit = ({ formData, setForm, navigation,login }) => {
  const {
    creditCard, cardExpirydate, CVV, phone ,category
  } = formData;
 useEffect(()=>{
   console.log(login)
 },[]);
 const handleLogin=(e)=>{
   e.preventDefault();
  navigation.next();
 // login();
 }
  return (
    <Container maxWidth='xl'>
      <h1>Congratulations!</h1>
       <h3>your campaign is being processed.We will start delivering the first lead within the next 24 hours.</h3>
       <br></br>
         <Button
          color="primary"
          variant="contained"
          onClick={handleLogin}>
          Go To Dashboard--
        </Button>
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

export default Submit;
