document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search");
  const inputElement = document.getElementById("input");

  searchIcon.addEventListener("click", function () {
    inputElement.classList.toggle("hidden");
    inputElement.style.top = "30px";
  });
});
