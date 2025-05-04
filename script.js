document.querySelectorAll("html a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll(".menu a", "logo").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
        document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
        document.querySelector(this.getAttribute("href")).style.display = "flex";
    });
});

document.querySelector("#home").style.display = "flex";
document.querySelectorAll(".content").forEach(sec => sec.style.display = "none");

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let index = 0;

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}


setInterval(changeImage, 1500);