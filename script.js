document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const introText = document.getElementById("introtext");

  toggleButton.addEventListener("click", function() {
    if (introText.style.display === "none") {
      introText.style.display = "block";
      toggleButton.textContent = "-";
    } else {
      introText.style.display = "none";
      toggleButton.textContent = "+";
    }
  });
});