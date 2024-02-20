import React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

function SurveyNew() {
  const [showReview, setShowReview] = useState(false);
  const methods = useForm();

  const handleShowReview = () => {
    setShowReview(!showReview);
  };

  return (
    <div>
      <FormProvider {...methods}>
        {showReview ? (
          <SurveyFormReview disableReview={handleShowReview} />
        ) : (
          <SurveyForm showReview={handleShowReview} />
        )}
      </FormProvider>
    </div>
  );
}
export default SurveyNew;
