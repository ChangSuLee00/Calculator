const numDisplay = document.querySelector(".numberDisplay");
const operator = document.querySelectorAll("#cal_bt");
const nums = document.querySelectorAll("#num_bt");
const equal_button = document.querySelector(".equalButton");

const temp = ["", ""];
let operated = false;
let calculated = false;
let numRestarted = "";
let operation = "";

for (let i = 0; i < nums.length - 1; i++) {
  nums[i].addEventListener("click", function () {
    if (!operated) {
      if (!calculated) {
        temp[0] += nums[i].innerText;
        numDisplay.innerText = temp[0];
      } else {
        if (operated) {
          temp[1] += nums[i].innerText;
          numDisplay.innerText = temp[1];
        } else {
          numRestarted += nums[i].innerText;
          temp[0] = numRestarted;
          numDisplay.innerText = temp[0];
        }
      }
    } else {
      temp[1] += nums[i].innerText;
      numDisplay.innerText = temp[1];
    }
  });
}

nums[11].addEventListener("click", function () {
  temp[0] = "";
  temp[1] = "";
  numDisplay.innerText = temp[0];
  operated = false;
  calculated = false;
  operation = "";
});

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    operation = operator[i].innerText;
    numDisplay.innerText = "";
    if (temp[0] !== "") {
      operated = true;
    }
  });
}

equal_button.addEventListener("click", function () {
  if (operation === "+") {
    temp[0] = Number(temp[0]) + Number(temp[1]);
    numDisplay.innerText = temp[0];
  }

  if (operation === "-") {
    temp[0] = Number(temp[0]) - Number(temp[1]);
    numDisplay.innerText = temp[0];
  }

  if (operation === "x") {
    temp[0] = Number(temp[0]) * Number(temp[1]);
    numDisplay.innerText = temp[0];
  }

  if (operation === "÷") {
    temp[0] = Number(temp[0]) / Number(temp[1]);
    numDisplay.innerText = temp[0];
  }

  temp[1] = "";
  operated = false;
  calculated = true;
  numRestarted = "";
});
