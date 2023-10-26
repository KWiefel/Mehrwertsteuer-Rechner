const hitVat = document.body.querySelector("#hitVat");
const substractVat = document.body.querySelector("#substractVat");

const percent19 = document.body.querySelector("#percent-19");
const percent7 = document.body.querySelector("#percent-7");

let inputAmount = document.body.querySelector("#amount-net");

const outputVat = document.body.querySelector("#resultVat");
const outputSum = document.body.querySelector("#resultSum");

const amountType = document.body.querySelector("#amountType");
const sumType = document.body.querySelector("#sumType");

substractVat.addEventListener("click", () => {
  amountType.innerHTML =
    "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span>*</span>";
  sumType.textContent = "Nettobetrag";
  outputSum.textContent = `€`;
  outputVat.textContent = `€`;
});

hitVat.addEventListener("click", () => {
  amountType.innerHTML =
    "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>";
  sumType.textContent = "Bruttobetrag (Endpreis)";
  outputSum.textContent = `€`;
  outputVat.textContent = `€`;
});

percent19.addEventListener("click", () => {
  outputSum.textContent = `€`;
  outputVat.textContent = `€`;
});

percent7.addEventListener("click", () => {
  outputSum.textContent = `€`;
  outputVat.textContent = `€`;
});

const calculate = () => {
  if (hitVat.checked == true) {
    if (percent19.checked == true) {
      let resultSum = Number(inputAmount.value * 1.19).toFixed(2);
      let resultVat = Number(inputAmount.value * 0.19).toFixed(2);
      outputSum.textContent = `${resultSum} €`;
      outputVat.textContent = `${resultVat} €`;
    } else {
      let resultSum = Number(inputAmount.value * 1.07).toFixed(2);
      let resultVat = Number(inputAmount.value * 0.07).toFixed(2);
      outputSum.textContent = `${resultSum} €`;
      outputVat.textContent = `${resultVat} €`;
    }
  } else {
    if (percent19.checked == true) {
      let resultSum = Number(inputAmount.value / 1.19).toFixed(2);
      let resultVat = Number((inputAmount.value * 19) / 119).toFixed(2);
      outputSum.textContent = `${resultSum} €`;
      outputVat.textContent = `${resultVat} €`;
    } else {
      let resultSum = Number(inputAmount.value / 1.07).toFixed(2);
      let resultVat = Number((inputAmount.value * 7) / 107).toFixed(2);
      outputSum.textContent = `${resultSum} €`;
      outputVat.textContent = `${resultVat} €`;
    }
  }
};
