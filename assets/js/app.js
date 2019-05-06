function contactUsForm() {
  const form_name = window.document.getElementById("form-name").value;
  const form_email = window.document.getElementById("form-email").value;
  const form_Subject = window.document.getElementById("form-Subject").value;
  const form_text = window.document.getElementById("form-text").value;

  const newObj = {
    form_name,
    form_email,
    form_Subject,
    form_text
  };
  console.log(newObj);

  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLScmvr6oEwjBTPoTD-5c6dW8YUTEpjLgSgCxx0gFUVCYiOXmfQ/viewform?usp=pp_url&entry.1065942813=" +
      form_email +
      "&entry.334795048=" +
      form_Subject +
      "&entry.983970514=" +
      form_name +
      "&entry.85124918=" +
      form_text,
    "_blank"
  );
}