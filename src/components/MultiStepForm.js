import React,{useState} from "react";
import { useForm, useStep } from "react-hooks-helper";
import { BusinessDetails } from "./stepForm/BusinessDetails";
import  Budget  from "./stepForm/Budget";
import { CampaignDetails } from "./stepForm/campaignDetails";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import {Dashboard} from "./stepForm/Dashboard";

const defaultData = {
  campaignName: "",
  campaignStartDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
  campaignEndDate: "NOT Decided",
  clientDetail: [],
  businessName: "",
  website: "",
  location: "",
  phone: "",
  category: "",
   cardExpirydate:"", CVV:"", phone:"" ,
  loggedIn: false
};


const steps = [
  { id: "businessDetail" },
  { id: "campaignDetail" },
  { id: "budget" },
  { id: "review" },
  { id: "submit" },
  { id: "dashboard"}
];

export const MultiStepForm = (login) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation,  login};
  switch (step.id) {
    case "businessDetail":
      return <BusinessDetails {...props} />;
    case "campaignDetail":
      return <CampaignDetails {...props} />;
    case "budget":
      return <Budget {...props} /> ;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
      case "dashboard":
      return <Dashboard {...props} />;
      default:return <></>
  }
};
