
const lernBtn = document.getElementById("lernBtn");
const listItems = document.querySelectorAll("#zusammenfassung li");
let aktiv = false;

lernBtn.addEventListener("click", () => {
  listItems.forEach((li) => {
    if (!li.textContent.includes(":")) return;

    if (!aktiv) {
      const index = li.textContent.indexOf(":");
      const begriff = li.textContent.slice(0, index);
      const rest = li.textContent.slice(index);

      li.innerHTML = `<span class="highlight">${begriff}</span>${rest}`;
    } else {
      li.textContent = li.textContent;
    }
  });

  aktiv = !aktiv;
  lernBtn.textContent = aktiv
    ? "Hervorhebung entfernen"
    : "Wichtige Begriffe hervorheben";
});

function toggleBeispiel(buttonId, beispielId) {
  const btn = document.getElementById(buttonId);
  const pre = document.getElementById(beispielId);

  if (!btn || !pre) return;

  btn.addEventListener("click", () => {
    if (pre.style.display === "block") {
      pre.style.display = "none";
    } else {
      pre.style.display = "block";
    }
  });
}

toggleBeispiel("btn1", "beispiel1");
toggleBeispiel("btn2", "beispiel2");
toggleBeispiel("btn3", "beispiel3");
toggleBeispiel("btn4", "beispiel4");
toggleBeispiel("btn5", "beispiel5");
toggleBeispiel("btn6", "beispiel6");
