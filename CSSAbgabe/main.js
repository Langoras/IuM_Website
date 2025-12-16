document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-toggle-sources]");
  const box = document.getElementById("quellen");

  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    const hidden =
      box.style.display === "none" || getComputedStyle(box).display === "none";

    box.style.display = hidden ? "block" : "none";

    if (hidden) {
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
