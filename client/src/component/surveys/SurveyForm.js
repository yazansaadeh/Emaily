import React from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import { validateEmails } from "../../utils/validateEmails";
import formField from "./formField";

function SurveyForm({ showReview }) {
  const { setValue } = useFormContext();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      title: "",
      subject: "",
      body: "",
      recipients: "",
    },
  });
  const recipientListValue = watch("recipients");
  formField[3].customValidation = () => {
    return validateEmails(recipientListValue);
  };

  const onSubmit = (data) => {
    setValue("title", data.title);
    setValue("subject", data.subject);
    setValue("body", data.body);
    setValue("recipients", data.recipients);
    showReview();
  };
  const renderedField = formField.map(({ label, name, customValidation }) => {
    return (
      <label key={name}>
        {label}:
        <Controller
          name={name}
          control={control}
          rules={{
            required: `${label} is required`,
            validate: customValidation,
          }}
          render={({ field, fieldState }) => (
            <SurveyField field={field} fieldState={fieldState} />
          )}
        />
      </label>
    );
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderedField}
      <Link to="/surveys" className="red btn-flat white-text">
        Cancel
      </Link>
      <button className="teal btn-flat right white-text" type="submit">
        Next
        <MdOutlineDone />
      </button>
    </form>
  );
}
export default SurveyForm;
