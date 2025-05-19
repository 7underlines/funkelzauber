const starContainer = document.querySelector(".bg-stars");
const starCount = 40;
for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 4 + "s";
    starContainer.appendChild(star);
}
