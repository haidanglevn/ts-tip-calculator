"use strict";
let bill;
let totalPerPerson;
let tipPerPerson;
let tipPercentage;
let numberOfPeople;
const numberFormater = (number) => {
    return number.toFixed(2);
};
const calculate = () => {
    let tipTotal = (bill * tipPercentage) / 100;
    tipPerPerson = tipTotal / numberOfPeople;
    totalPerPerson = (bill + tipTotal) / numberOfPeople;
    showTotal(tipPerPerson, totalPerPerson);
    console.log(totalPerPerson);
    console.log("run");
};
const toggleResetButton = () => {
    const resetButton = document.querySelector(".reset-button");
    if (bill || tipPercentage || numberOfPeople) {
        resetButton === null || resetButton === void 0 ? void 0 : resetButton.classList.add("active");
        resetButton === null || resetButton === void 0 ? void 0 : resetButton.removeAttribute("disabled");
    }
};
const softReset = () => {
    totalPerPerson = 0;
    tipPerPerson = 0;
};
const hardReset = () => {
    bill = 0;
    totalPerPerson = 0;
    tipPerPerson = 0;
    tipPercentage = 0;
    numberOfPeople = 0;
};
const billInputHandler = (val) => {
    softReset();
    toggleResetButton();
    if (Number.isNaN(bill)) {
        bill == undefined;
    }
    bill = parseInt(val);
    console.log("bill ", bill);
    if (tipPercentage && numberOfPeople) {
        calculate();
    }
};
const percentageHandler = (val) => {
    softReset();
    toggleResetButton();
    tipPercentage = parseInt(val);
    console.log("tipPercent ", tipPercentage);
    if (bill && numberOfPeople) {
        calculate();
    }
};
const personHandler = (val) => {
    softReset();
    toggleResetButton();
    numberOfPeople = parseInt(val);
    console.log("people ", numberOfPeople);
    if (bill && tipPercentage) {
        calculate();
    }
};
const test = (type, val) => {
    switch (type) {
        case "billInput":
            billInputHandler(val);
            break;
        case "percentageInput":
            percentageHandler(val);
            break;
        case "personInput":
            personHandler(val);
            break;
    }
    console.log("run");
};
const showTotal = (tip, tot) => {
    document.querySelector(".tip-amount").innerHTML =
        numberFormater(tip).toString();
    document.querySelector(".total").innerHTML =
        numberFormater(tot).toString();
};
//# sourceMappingURL=app.js.map