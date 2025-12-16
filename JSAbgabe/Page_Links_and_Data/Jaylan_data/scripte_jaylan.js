document.addEventListener("DOMContentLoaded", () => {

    /* Scroll nach oben */
    const upBtn = document.querySelector(".Up_from_the_Buttom");
    if (upBtn) {
        upBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* Popup Button (CSS Text anzeigen) */
    const popupBtn = document.querySelector(".popupBtn");
    if (popupBtn) {
        popupBtn.addEventListener("click", () => {
            const win = window.open("about:blank", "_blank", "width=400,height=300");
            if (!win) return;

            win.document.write(
                ".popupBtn {\n" +
                "  background-color: DarkCyan;\n" +
                "  color: white;\n" +
                "  border: none;\n" +
                "  padding: 12px 24px;\n" +
                "  font-size: 16px;\n" +
                "  cursor: pointer;\n" +
                "  border-radius: 12px 0 12px 0;\n" +
                "}"
            );
        });
    }

    /* Farbwechsel Button */
    document.querySelectorAll(".color-changer").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");

            const win = window.open("about:blank", "_blank", "width=400,height=300");
            if (!win) return;

            win.document.write(
                ".color-changer {\n" +
                "  background-color: rgb(39, 160, 77);\n" +
                "  border: none;\n" +
                "  color: rgb(12, 4, 4);\n" +
                "  padding: 12px 24px;\n" +
                "  font-size: 14px;\n" +
                "  cursor: pointer;\n" +
                "  border-radius: 6px;\n" +
                "}\n\n" +
                ".color-changer.active {\n" +
                "  background-color: rgb(202, 51, 51);\n" +
                "}"
            );
        });
    });

    /* Seite schließen (nur bei Klick, nicht hover!) */
    document.querySelectorAll(".closeBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "about:blank";
        });
    });

    /* Musik Button */
    document.querySelectorAll(".playBtn").forEach(btn => {
        btn.addEventListener("click", () => {

            const audio = new Audio(
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            );
            audio.play();

            const win = window.open("about:blank", "_blank", "width=500,height=300");
            if (!win) return;

            win.document.write(
                "&lt;button class=\"playBtn\"&gt;Musik abspielen&lt;/button&gt;\n\n" +
                "&lt;script&gt;\n" +
                "document.querySelectorAll(\".playBtn\").forEach(btn =&gt; {\n" +
                "  btn.addEventListener(\"click\", () =&gt; {\n" +
                "    const audio = new Audio(\"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\");\n" +
                "    audio.play();\n" +
                "  });\n" +
                "});\n" +
                "&lt;/script&gt;"
            );
        });
    });

});
