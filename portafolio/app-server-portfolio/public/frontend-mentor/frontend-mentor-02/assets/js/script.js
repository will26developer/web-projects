window.addEventListener("DOMContentLoaded",() => {
    const formAlert = document.querySelector(".form__alert");
    const contactForm = document.querySelector(".contact__form");
    const formInput = document.querySelector(".form__input");
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const validateEmail = (email,regex) => regex.test(email);

    contactForm.addEventListener("submit",e => {
        e.preventDefault()
        let email = formInput.value.trim();
        if (!validateEmail(email,regex)) {
            formAlert.classList.remove("hidden");
            formAlert.textContent = "Please provide a valid email";
        } else {
            formAlert.textContent = "";
            formAlert.classList.add("hidden");
        }
    })
})