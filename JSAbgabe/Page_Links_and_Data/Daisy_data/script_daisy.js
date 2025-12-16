// script.js
// Einfaches JavaScript für die CSS-Methoden-Seite
// Erstellt von Daisy-Slava Alexandrow

// Funktion zum Umschalten des Dark Modes
function darkModeUmschalten() {
    document.body.classList.toggle("dark");
}

// Optional: Button automatisch beim Laden der Seite einfügen
document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");
    button.textContent = "🌙 Dark Mode umschalten";
    button.style.margin = "10px";
    button.onclick = darkModeUmschalten;

    // Button ganz oben im Body einfügen
    document.body.insertBefore(button, document.body.firstChild);
});
<script src="script.js"></script>

<style>
    .dark {
        background-color: #121212;
        color: white;
    }

    .dark a {
        color: lightblue;
    }
</style>

