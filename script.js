const slider = document.querySelector(".slider"),
  active = document.querySelector("#active"),
  line1 = document.querySelector("#line1"),
  line2 = document.querySelector("#line2"),
  line3 = document.querySelector("#line3"),
  line4 = document.querySelector("#line4"),
  container = document.querySelector(".container");

line1.addEventListener("click", function () {
  slider.style.transform = "translateX(0)";
  container.style.backgroundColor = "#ffc300";
  active.style.top = "0";
});

line2.addEventListener("click", function () {
  slider.style.transform = "translateX(-25%)";
  container.style.backgroundColor = "#015DE4 ";
  active.style.top = "80px";
});

line3.addEventListener("click", function () {
  slider.style.transform = "translateX(-50%)";
  container.style.backgroundColor = "#608F49 ";
  active.style.top = "160px";
});

line4.addEventListener("click", function () {
  slider.style.transform = "translateX(-75%)";
  container.style.backgroundColor = "#DA0335 ";
  active.style.top = "240px";
});
