const origArray = [2, 3, 4];

function populateTextboxes() {
  document.getElementById("textbox1").value = origArray[0];
  document.getElementById("textbox2").value = origArray[1];
  document.getElementById("textbox3").value = origArray[2];
}

document.addEventListener("DOMContentLoaded", function() {
  populateTextboxes();

  document.getElementById("cubeButton").addEventListener("click", function() {
    const newArray = origArray.map(function(x) {
      return x * x * x;
    });
    document.getElementById("textbox1").value = newArray[0];
    document.getElementById("textbox2").value = newArray[1];
    document.getElementById("textbox3").value = newArray[2];
  });

  document.getElementById("fourthPowerButton").addEventListener("click", fourthPower);
});

function squareValues() {
  const newArray = origArray.map(function(x) {
    return x * x;
  });
  document.getElementById("textbox1").value = newArray[0];
  document.getElementById("textbox2").value = newArray[1];
  document.getElementById("textbox3").value = newArray[2];
}

function fourthPower() {
  const newArray = origArray.map(function(x) {
    return x * x * x * x;
  });
  document.getElementById("textbox1").value = newArray[0];
  document.getElementById("textbox2").value = newArray[1];
  document.getElementById("textbox3").value = newArray[2];
}