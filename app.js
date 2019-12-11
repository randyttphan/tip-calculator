//Calculate Tip
const calculateTip = () => {
  let billAmount = document.getElementById("bill-amount").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let numOfPeople = document.getElementById("people-amount").value;

  //Just to validate some input
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }

  //Checks to see if this input is empty or less than/equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip and then round
  let total = (billAmount * serviceQuality) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
};

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

const calculateButton = (document.getElementById(
  "calculate-tip"
).onclick = function() {
  calculateTip();
});
