
var view = document.querySelector(".pv");
var cost = document.querySelector('.cost');
var progressBar = document.querySelector('.range');
var toggle = document.querySelector('.check');
var time = document.querySelector('.time');

let pageview = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 32];
let isYearly = false;

progressBar.oninput =function () {
  updateValue();
  view.innerHTML = pageview[progressBar.value];

};

toggle.onclick = function () {
    if (isYearly == false) {
      isYearly = true;
    } else {
      isYearly = false;
    }
    updateValue();
  };
  
  function updateValue() {
    if (isYearly) {
      cost.innerHTML = perMonth[progressBar.value] * 0.75 * 12 ;
      time.textContent = "/Year";
     
    } else {
      cost.innerHTML = perMonth[progressBar.value];
      time.textContent = "/Month";
      
  }
}








