const cardForm = document.querySelector("#card-form");
const formCont = document.querySelector(".form-cont");
const cardNumber = document.querySelector("#form-card-number");
const cardDateMonth = document.querySelector("#form-date-month");
const cardDateYear = document.querySelector("#form-date-year");
const cardCVC = document.querySelector("#form-card-cvc");
const formNumberError = document.querySelector(".form-input-error");
const formDateError = document.querySelector(".form-date-error");
const formCVCError = document.querySelector(".form-cvc-error");
const formConfirmationCont = document.querySelector(".form-confirmation");
const continueBtn = document.querySelector(".continue-btn");

continueBtn.addEventListener("click", () => {
    location.reload();
});

function formSubmit() {
    formCont.style.display = "none";
    formConfirmationCont.style.display = "flex";
}

cardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let invalidInput = false;
    if (cardNumber.value === "") {
        formNumberError.style.display = "block";
        invalidInput = true;
    }

    if (cardDateMonth.value === "") {
        formDateError.style.display = "block";
        invalidInput = true;
    }

    if (cardDateYear.value === "") {
        formDateError.style.display = "block";
        invalidInput = true;
    }

    if (cardCVC.value === "") {
        formCVCError.style.display = "block";
        invalidInput = true;
    }

    if (invalidInput === false) {
        formSubmit();
    }
});
