const toggles = document.querySelectorAll(".knapopgaver");

toggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const content = this.parentElement.querySelector(".indholdopgaver");
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    this.textContent = content.style.display === "block" ? "▼" : "▶";
  });
});
