const validateEmails = (emails) => {
  const regexs =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => regexs.test(email) === false);
  if (invalidEmails.length) {
    return `these emails are invalid ${invalidEmails}`;
  }
  return;
};
export { validateEmails };
