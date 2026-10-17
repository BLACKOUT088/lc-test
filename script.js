let testtime = 0;

const cpslayout = document.getElementById("layout");
const button1s = document.getElementById("s1");
const buttonones = document.getElementById("onesbutton");
const button5s = document.getElementById("s5");
const button15s = document.getElementById("s15");
const button30s = document.getElementById("s30");
const button1m = document.getElementById("m1");

const buttonss = document.querySelectorAll(".sbuttons button");

buttonss.forEach((buttonselector) => {
  buttonselector.addEventListener("click", function () {
    console.log("clicked id:", this.id);
    if (this.id === "s1") {testtime = 1000; console.log("id:", this.id); }
    else if (this.id === "s5") testtime = 5000;
    else if (this.id === "s15") testtime = 15000;
    else if (this.id === "s30") testtime = 30000;
    else if (this.id === "m1") testtime = 60000;

    cpslayout.classList.toggle("inactive");
    buttonones.classList.toggle("inactive");
    backtoseconds.classList.toggle("inactive");
    button.disabled = false;
    button.textContent = "Start";
  })
});

/*Layout Buttons*/

let punkte = 0;
let testRunning = false;

const button = document.getElementById("CPS");
const time = document.getElementById("Zeit");
const result = document.getElementById("End");
const exit = document.getElementById("close");

button.addEventListener("click", function () {
  if (testRunning === false) {
    testRunning = true;
    punkte = 0;
    button.textContent = "0";

    setTimeout(function () {
      button.disabled = true;

      if (testRunning === true) {
      time.textContent = punkte;
      result.style.display = "block";
      testRunning = false;
      };
    }, testtime);
  }

  if (testRunning === true) {
    punkte++;
    button.textContent = punkte;
  }
});

exit.addEventListener("click", function () {
  button.disabled = false;
  exit.disabled = true;
  result.style.display = "none";
  button.textContent = "Start";
});

/*exit counter and go back to changer*/

const backtoseconds = document.getElementById("back");

backtoseconds.addEventListener("click", function() {
    if (testRunning === true) testRunning = false;
  cpslayout.classList.toggle("inactive");
  buttonones.classList.toggle("inactive");
  backtoseconds.classList.toggle("inactive");
  result.style.display = "none";
});