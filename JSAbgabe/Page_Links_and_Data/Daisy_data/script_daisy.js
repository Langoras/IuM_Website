// script.js
// Einfaches JavaScript für die CSS-Methoden-Seite
// Erstellt von Daisy-Slava Alexandrow

function darkModeUmschalten() {
    document.body.classList.toggle("dark");
}
document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");
    button.textContent = "🌙 Dark Mode umschalten";
    button.style.margin = "10px";
    button.onclick = darkModeUmschalten;

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

