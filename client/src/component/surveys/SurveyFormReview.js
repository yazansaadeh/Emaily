import React from "react";
import { useFormContext } from "react-hook-form";
import { useHistory } from "react-router-dom";
import formField from "./formField";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { sendEmails } from "../../store";

function SurveyFormReview({ disableReview }) {
  const { watch } = useFormContext();
  const dispatch = useDispatch();
  const history = useHistory();

  const renderedFormField = formField.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{watch(`${name}`)}</div>
      </div>
    );
  });

  const handleClick = () => {
    disableReview();
  };
  const handleSendEmailsClick = () => {
    dispatch(
      sendEmails({
        title: watch("title"),
        subject: watch("subject"),
        body: watch("body"),
        recipients: watch("recipients"),
      })
    );
    history.push("/surveys");
  };

  return (
    <div>
      <h5>Please confirm your entries:</h5>
      {renderedFormField}
      <button
        onClick={handleClick}
        className="yellow white-text darken-3 btn-flat"
      >
        Back
      </button>
      <button
        onClick={handleSendEmailsClick}
        className="btn-flat white-text green right"
      >
        Send Survey
        <MdEmail />
      </button>
    </div>
  );
}

export default SurveyFormReview;
