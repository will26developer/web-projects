window.addEventListener("DOMContentLoaded", () => {
  const notifyForm = document.querySelector(".contact__form");
  const notifyInput = document.querySelector(".form__input");
  const alertNotify = document.querySelector(".form__alert");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validEmail = (regex, email) => regex.test(email.trim());

  notifyForm.addEventListener("submit", e => {
    e.preventDefault();
    let email = notifyInput.value;
    if (!validEmail(regex, email)) {
      notifyInput.classList.add("input__alert");
      alertNotify.classList.remove("hidden");
      alertNotify.textContent = "Please provide a valid email adress";
    } else {
      notifyInput.value = "";
      notifyInput.classList.remove("input__alert");
      alertNotify.classList.add("hidden");
      alertNotify.textContent = "";
    }
  })
});
