window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const status = params.get("status");
  const message = params.get("message");

  document.querySelector("#error-status").textContent = `Error ${status}`;
  document.querySelector("#error-message").textContent = message;
});
