// Nach-oben-Button erstellen
const topBtn = document.createElement("button");
topBtn.textContent = "↑ Nach oben";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
