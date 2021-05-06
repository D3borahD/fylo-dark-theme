function warning() {
  const addMail = document.querySelector("#mail-add");
  if (!addMail.checkValidity()) {
    document.getElementById("invalid-text").innerHTML =
      "Please enter a valid email address";
  }
}
