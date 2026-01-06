const toggles = document.querySelectorAll(".knapopgaver");

toggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const section = this.closest("section");
    const content = section.querySelector(".indholdopgaver");

    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    this.textContent = isOpen ? "▶" : "▼";
  });
});
