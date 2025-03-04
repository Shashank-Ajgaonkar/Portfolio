const display = document.getElementById("display");

// shows values on the display screen of the calculator
function appendToDisplay(input) {
  display.style.color = "#ffffff";   // to make sure font color after an error stays white.
  display.value += input;
}
// to clear the display screen of the calculator
function clearDisplay() {
  display.value = "";
}
// to calculate and show result on the display screen of the calculator
function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.style.color = "#ff0000";  // to make the "Error" message red.
    display.value = "Error";
  }
}

// to return back to the portfolio page
function portfolio() {
  window.location.href = "./index.html#portfolio";
}
