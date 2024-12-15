document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("contactForm")) {
        document.getElementById("contactForm").style.display = "none";
    }
});
