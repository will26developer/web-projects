window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code") || "500";
    const message = params.get("message") || "Something went wrong";

    const codeEl = document.querySelector(".error__code");
    codeEl.textContent = code;
    codeEl.dataset.text = code;

    const titleEl = document.querySelector(".error__title");
    titleEl.textContent =
        code === "404" ? "Page Not Found" : "Unexpected Error";

    const messageEl = document.querySelector(".error__message");
    messageEl.childNodes[0].textContent = message;

    const detailsEl = document.querySelector(".error__path");
    detailsEl.textContent = `Error: ${code}`;

})