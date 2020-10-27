document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("form");
  const $email = document.querySelector("#email");
  const $password = document.querySelector("#password");
  const $emailError = document.querySelector(".email-error");
  const $passwordError = document.querySelector(".password-error");

  const getValidations = ({ email, password }) => {
    let emailIsValid = false;
    let passwordIsValid = false;

    if (
      email !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      emailIsValid = true;
    }

    if (password !== "" && password.length > 4) {
      passwordIsValid = true;
    }

    return {
      emailIsValid,
      passwordIsValid,
    };
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const values = {
      email: email.value,
      password: password.value,
    };
    const validations = getValidations(values);

    if (!validations.emailIsValid) {
      $email.classList.add("invalid");
      $emailError.style.display="block";
    } else {
      $email.classList.add("valid");
      $emailError.style.display="none";
    }

    if (!validations.passwordIsValid) {
      $password.classList.add("invalid");
      $passwordError.style.display="block";
    } else {
      $password.classList.add("valid");
      $passwordError.style.display="none";
    }

    if (validations.emailIsValid && validations.passwordIsValid) {
      $form.submit();
    }
  });

  $emailError.style.display="none";
  $passwordError.style.display="none";
});
