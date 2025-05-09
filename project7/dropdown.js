const select = document.querySelector(".custom-select");
const selected = select.querySelector(".selected");
const options = select.querySelector(".options");

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

options.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    options.style.display = "none";
    // Do something with the selected value: option.dataset.value
  });
});
