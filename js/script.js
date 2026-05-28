const targetDate = new Date("September 12, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("cd-d").innerText = "00";
        document.getElementById("cd-h").innerText = "00";
        document.getElementById("cd-m").innerText = "00";
        document.getElementById("cd-s").innerText = "00";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cd-d").innerText = String(days).padStart(2, "0");
    document.getElementById("cd-h").innerText = String(hours).padStart(2, "0");
    document.getElementById("cd-m").innerText = String(minutes).padStart(2, "0");
    document.getElementById("cd-s").innerText = String(seconds).padStart(2, "0");
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

const hiddenElements = document.querySelectorAll(
	'.hidden, .hidden-left, .hidden-right, .zoom-hidden'
);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {

		if (entry.isIntersecting) {

			entry.target.classList.add('show');

		}
	});
}, {
	threshold: 0.15
});

hiddenElements.forEach((el) => observer.observe(el));