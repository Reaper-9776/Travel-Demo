// Mobile menu toggle
document.getElementById("mobileToggle").addEventListener("click", function() {
  const menu = document.querySelector(".menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});

// Hero slider with fade
const slides = document.querySelectorAll(".hero-slider .slide");
let current = 0;

function nextSlide() {
  slides.forEach(s => s.classList.remove("active"));
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(nextSlide, 4000);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
});

// Testimonials horizontal drag
const container = document.querySelector(".testimonials");
let isDown = false, startX, scrollLeft;
container.addEventListener("mousedown", e => { isDown=true; startX=e.pageX-container.offsetLeft; scrollLeft=container.scrollLeft; });
container.addEventListener("mouseleave", () => { isDown=false; });
container.addEventListener("mouseup", () => { isDown=false; });
container.addEventListener("mousemove", e => { if(!isDown) return; e.preventDefault(); const x = e.pageX - container.offsetLeft; const walk = (x-startX)*2; container.scrollLeft = scrollLeft - walk; });

// Optional: Parallax text movement on scroll
window.addEventListener('scroll', function() {
  const heroText = document.querySelector('.hero-overlay');
  heroText.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
