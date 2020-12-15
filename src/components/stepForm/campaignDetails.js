import React from "react";
import {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const CampaignDetails = ({ formData, setForm, navigation }) => {
  const { campaignName , campaignStartDate , campaignEndDate,clientDetail } = formData;
  const [fields,setFields]=useState([{value:null}])
  const today= new Date();
  const handleAdd=()=>{
    const values=[...fields];
    values.push({value:null});
    setFields(values);
  }
  function handleRemove(i){
      const values=[...fields];
      values.splice(i,1);
      setFields(values);
  }
  if(fields.length<=5){
  return (
    <Container maxWidth="xs">
      <h1>Let's talk about your campaign</h1>
      Fill-in the form below
      <TextField
        label="campaignName"
        name="campaignName"
        value={campaignName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <input 
        type="date"
        className="date"
        className="business-category"
        placeholder="campaign Start Date"
        name="campaignStartDate"
        value={campaignStartDate}
        onChange={setForm}
        width="100%"
        min={today}
      />
       <input type="date"
        className="date"
        className="business-category"
        name="campaignEndDate"
        placeholder="campaign end date"
        value={campaignEndDate}
        onChange={setForm}
        width="100%"
      />
       {
          fields.map((field,idx)=>(<div key={`${field}-${idx}`}>
            <button onClick={()=>{handleRemove(idx)}}>x</button>
            <TextField
            label="Enter 5 potential clients(name & websites)"
            value={clientDetail[idx]}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            />
            </div>))
            }
        <Button
        variant="contained"
        onClick={handleAdd}
      >+</Button>
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
          }
  else{
    alert("cannot add more fields");
  }
};
