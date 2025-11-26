const form = document.getElementById("feedback-form") as HTMLFormElement | null;
const statusBox = document.getElementById("feedback-status");

function showError(
  input: HTMLInputElement | HTMLTextAreaElement,
  message: string
) {
  const group = input.parentElement;

  const error = group?.querySelector(".error-message");

  if (error) {
    error.textContent = message;
  }
}

function clearError(input: HTMLInputElement | HTMLTextAreaElement) {
  const group = input.parentElement;

  const error = group?.querySelector(".error-message");

  if (error) {
    error.textContent = "";
  }
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form?.addEventListener("input", (e) => {
  const input = e.target as HTMLInputElement | HTMLTextAreaElement;

  if (input.required && input.value.trim() === "") {
    showError(input, "This field is required.");
  } else if (input.type === "email" && !validateEmail(input.value)) {
    showError(input, "Please enter a valid email.");
  } else {
    clearError(input);
  }
});

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  [...form.elements].forEach((input) => {
    if (input.tagName !== "INPUT" && input.tagName !== "TEXTAREA") {
      return;
    }

    const inputElement = input as HTMLInputElement | HTMLTextAreaElement;

    if (inputElement.required && inputElement.value.trim() === "") {
      showError(inputElement, "This field is required.");
      valid = false;
    }

    if (inputElement.type === "email" && !validateEmail(inputElement.value)) {
      showError(inputElement, "Please enter a valid email.");
      valid = false;
    }
  });

  if (!valid) {
    return;
  }

  if (statusBox) {
    statusBox.style.color = "green";
    statusBox.textContent = "Your message has been sent successfully!";
  }

  form.reset();
});
