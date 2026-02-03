
window.addEventListener("DOMContentLoaded",() => {
  const form = document.querySelector(".form__form");
  const labelErrorList = document.querySelectorAll(".label__error");
  const labelInputList = document.querySelectorAll(".label__input");
  const spanAlertList = document.querySelectorAll(".label__alert");
  const regexFirstName = /^[A-Za-z]+(?:['-][A-Za-z]+)?$/;
  const regexLastName = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const arrayRegex = [regexFirstName,regexLastName,regexEmail,regexPassword];

  const hideError = index => {
    labelInputList[index].value = "";
    spanAlertList[index].textContent = "";
    spanAlertList[index].classList.remove("label-alert")
    labelErrorList[index].classList.add("hidden");
    labelInputList[index].classList.remove("input__alert");
  }

  const showAlert = (index,message) => {
    spanAlertList[index].textContent = message;
    spanAlertList[index].classList.add("label-alert")
    labelErrorList[index].classList.remove("hidden");
    labelInputList[index].classList.add("input__alert")
  }

  const checkValueInput = (regex,value) => regex.test(value);

  const validInput = (id,value,index) => {
    console.log(id,value,index)
    if (id === "first-name") {
      if (checkValueInput(arrayRegex[index],value)){
        hideError(index);
        return;
      } else {
        showAlert(index,"First name cannot be empty")
      }
    } else if (id === "last-name") {
      if (checkValueInput(arrayRegex[index],value)) {
        hideError(index);
        return;
      } else {
        showAlert(index,"Last name cannot be empty")
      }
    } else if (id === "email") {
      if (checkValueInput(arrayRegex[index],value)) {
        hideError(index)
        return;
      } else {
        showAlert(index,"Looks like this is not an email")
      }
    } else if (id === "password"){
      if (checkValueInput(arrayRegex[index],value)) {
        hideError(index)
        return;
      } else {
        showAlert(index,"Password cannot be empty");
      }
    }
  }

  form.addEventListener("submit",e => {
    e.preventDefault();
    labelInputList.forEach((input,index) => validInput(input.id,input.value,index))
  })
})
