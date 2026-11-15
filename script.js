// External script shared by the four pages.
document.getElementById("site-year").textContent = new Date().getFullYear();

const forms = document.querySelectorAll(".account-form");
for (const form of forms) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.querySelector(".form-status").textContent =
      "This is a form demo. No account request was sent.";
  });
}
