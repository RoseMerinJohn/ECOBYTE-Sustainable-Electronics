
 // ECOBYTE student website interactions
document.addEventListener("DOMContentLoaded", () => {

  // Product category filters
  const filterButtons = document.querySelectorAll("[data-filter]");
  const productItems = document.querySelectorAll(".product-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      filterButtons.forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute(
          "aria-pressed",
          item === button ? "true" : "false"
        );
      });

      productItems.forEach((item) => {
        item.hidden =
          category !== "all" &&
          item.dataset.category !== category;
      });
    });

    button.setAttribute(
      "aria-pressed",
      button.classList.contains("active") ? "true" : "false"
    );
  });

  // Contact form validation
  // This form does not send data to a server.
  const form = document.getElementById("contactForm");

  if (form) {
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      message.className = "form-message";
      message.textContent = "";

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        message.classList.add("error");
        message.textContent =
          "Please check the highlighted fields and try again.";

        const firstInvalid = form.querySelector(":invalid");

        if (firstInvalid) {
          firstInvalid.focus();
        }

        return;
      }

      form.classList.add("was-validated");
      message.classList.add("success");
      message.textContent =
        "Demo validation successful! This form does not send your message to a real server.";

      form.reset();
      form.classList.remove("was-validated");
    });
  }

});
