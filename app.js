const BASE_URL =
  "https://v6.exchangerate-api.com/v6/38f791e0b5d9ad13f66a91af/latest/USD";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  // update flag whenever dropdown changes
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// function to update exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  try {
    let response = await fetch(BASE_URL);
    let data = await response.json();

    // get rate using conversion_rates
    let fromRate = data.conversion_rates[fromCurr.value];
    let toRate = data.conversion_rates[toCurr.value];

    // convert: first normalize to USD, then to target
    let usdAmount = amtVal / fromRate;
    let finalAmount = (usdAmount * toRate).toFixed(2);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rates!";
    console.error(error);
  }
};

// function to update flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// button click -> update exchange rate
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// load default rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});
