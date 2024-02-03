const form = document.querySelector("#form");
const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const buttonsCont = document.querySelector("#percent-cont-btns");
const calcButtons = document.querySelectorAll(".calc-btn");
const ppTipAmountResult = document.querySelector("#pp-tip-amount");
const ppTotalResult = document.querySelector("#pp-total");
let percent = document.querySelector(".active-btn").value;
const resetButton = document.querySelector("#reset-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

const updateResults = () => {
    const billValue = parseFloat(billInput.value);
    const peopleValue = parseInt(peopleInput.value);

    if (billValue !== 0 && peopleValue !== 0) {
        const tipTotal = billValue * percent;
        const ppTipAmount = (billValue * percent) / peopleValue;
        const ppTotal = (tipTotal + billValue) / peopleValue;
        ppTipAmountResult.innerText = `$ ${
            Math.round(ppTipAmount * 100) / 100
        }`;
        ppTotalResult.innerText = `$ ${Math.round(ppTotal * 100) / 100}`;
    } else {
        window.alert("Input value cannot be 0");
    }
};

buttonsCont.addEventListener("click", (e) => {
    changeActiveBtn(e);
});

billInput.addEventListener("change", () => {
    updateResults();
});

peopleInput.addEventListener("change", () => {
    updateResults();
});

resetButton.addEventListener("click", () => {
    ppTipAmount.innerText = "$ 0.00";
    ppTotal.innerText = "$ 0.00";
});

const changeActiveBtn = (e) => {
    for (let i = 0; i < calcButtons.length; i++) {
        calcButtons[i].classList.remove("active-btn");
    }
    e.target.classList.add("active-btn");
    percent = e.target.value;
    updateResults();
};
