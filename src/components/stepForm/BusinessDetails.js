import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './BusinessDetails.css';
export const BusinessDetails = ({ formData, setForm, navigation }) => {
  const { businessName, website, location, phone ,category} = formData;
  
  return (<div>
    
    <Container maxWidth="xs">
      <div className="form">
      Fill-in the form below
      <h6>DAILY BUDGET</h6>
      <TextField
        label="Business Name"
        name="businessName"
        value={businessName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="website"
        name="website"
        value={website}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="location"
        name="location"
        value={location}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
       <TextField
        label="phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <select
      className="business-category"
       label="business category"
       name="business-category"
        value={category}
        onChange={setForm}
         ><option>Business category</option></select>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
      </div>
    </Container>
    </div>
  );
};
