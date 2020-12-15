import React from "react";
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Cart.module.css";
import "./Dashboard.css";

export const Dashboard = ({ formData,setForm, navigation }) => {
  const {
    campaignName, 
    campaignStartDate,
    campaignEndDate,
    businessName,
    StartDate,
    EndDate
  } = formData;

  return (
    <Container maxWidth='m'>
    <h1 className="business-name">{businessName}</h1>
      <h1>{campaignName}</h1>
       your campaign is being processed.We will start delivering the first lead within the next 24 hours.
       <br/>
       <br></br>
        <span><input type="date"
        className="date"
        className="business-category"
        name="StartDate"
        placeholder="campaign Start Date"
        value={StartDate}
        defaultValue={campaignStartDate}
        width="100%"
      /></span><span><input type="date"
      className="date"
      className="business-category"
      name="EndDate"
      placeholder="campaign end date"
      value={EndDate}
      defaultValue={campaignEndDate}
      width="100%"
    /></span>
    <img src="/dashboard.jpeg" alt="dashboard" width="80%" height="100%" style={{padding:"50px"}}></img>
    </Container>
  );
};

export default Dashboard;
