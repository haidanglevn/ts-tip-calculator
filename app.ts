let bill: number;
let totalPerPerson: number;
let tipPerPerson: number;
let tipPercentage: number;
let numberOfPeople: number;

// format the number to always show 2 decimal
const numberFormater = (number: number) => {
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
    resetButton?.classList.add("active");
    resetButton?.removeAttribute("disabled");
  }
};

// softReset calculation when there is new input
const softReset = () => {
  totalPerPerson = 0;
  tipPerPerson = 0;
};

// hardReset everything when press RESET button
const hardReset = () => {
  bill = 0;
  totalPerPerson = 0;
  tipPerPerson = 0;
  tipPercentage = 0;
  numberOfPeople = 0;
};

const billInputHandler = (val: string) => {
  softReset();
  toggleResetButton();
  // try to turn of reset button when input is missing/delete
  if (Number.isNaN(bill)) {bill == undefined}
  bill = parseInt(val);
  console.log("bill ", bill);
  if (tipPercentage && numberOfPeople) {
    calculate();
  }
};

const percentageHandler = (val: string) => {
  softReset();
  toggleResetButton();
  tipPercentage = parseInt(val);
  // known bug: tip percent can not have decimal
  console.log("tipPercent ", tipPercentage);
  if (bill && numberOfPeople) {
    calculate();
  }
};
const personHandler = (val: string) => {
  softReset();
  toggleResetButton();
  numberOfPeople = parseInt(val);
  console.log("people ", numberOfPeople);
  if (bill && tipPercentage) {
    calculate();
  }
};

// an input handler to take in the type of input and the value
const test = (type: string, val: string) => {
  // DOM element always pass a string
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

// a show totalPerPerson function to the UI
const showTotal = (tip: number, tot: number) => {
  (document.querySelector(".tip-amount") as Element).innerHTML =
    numberFormater(tip).toString();
  (document.querySelector(".total") as Element).innerHTML =
    numberFormater(tot).toString();
};
