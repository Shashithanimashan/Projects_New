

const inputNumber = document.getElementById("number");
const selectTo = document.getElementById("To");
const buttonConvert = document.getElementById("Convert");
const buttonClear = document.getElementById("clear");
const outputNumber = document.getElementById("number1");

// Add eventlistener to the "Convert" btn
buttonConvert.addEventListener("click", () => {
  
  // Get the selected temperature unit to convert to
  const toUnit = selectTo.value;

  
  // Get the input temperature value
  const inputTemp = inputNumber.value;

  
  // Convert the temperature on the selected option
  let outputTemp;
  if (toUnit == "celcius") {
    outputTemp = (inputTemp - 32) * (5 / 9);
    unit="\u00B0 Celcius"
    outputNumber.textContent = outputTemp.toFixed(2)+""+unit;
  } else if (toUnit == "Fahrenhite") {
    outputTemp  = (inputTemp  * (9 / 5)) + 32 ;
    unit= "\u00B0 Fahrenhite "
    outputNumber.textContent = outputTemp.toFixed(2)+""+unit;
  }

  
})

// Add eventlistener to the "Clear" btn
buttonClear.addEventListener("click", () => {
  
  // Clear the input and output
  inputNumber.value = "";
  selectTo.value = "";
  outputNumber.textContent = "";
})