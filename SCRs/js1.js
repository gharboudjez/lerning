const dec = document.getElementById("dec");
const res = document.getElementById("res");
const inc = document.getElementById("inc");

const counter = document.getElementById("counter");
let count = 0;

dec.onclick = function () {
  count--;
  counter.textContent = count;
};

res.onclick = function () {
  count = 0;
  counter.textContent = count;
};

inc.onclick = function () {
  count++;
  counter.textContent = count;
};
