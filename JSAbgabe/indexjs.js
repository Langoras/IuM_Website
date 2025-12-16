function RevealCards() {
    const cards = document.querySelectorAll(".ClickableCard");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
                entry.target.style.transition = "0.8s ease-out";
                observer.unobserve(entry.target);
            }
        });
    });

    cards.forEach(card => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", RevealCards);
