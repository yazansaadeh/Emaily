function SurveyField({ field, fieldState }) {
  return (
    <div>
      <input type="text" {...field} style={{ marginBottom: "5px" }} />
      {fieldState?.error && (
        <p className="red-text" style={{ marginBottom: "20px" }}>
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}

export default SurveyField;
