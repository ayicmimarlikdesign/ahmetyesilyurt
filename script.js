const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    const hedefId = this.getAttribute("href");
    const hedef = document.querySelector(hedefId);

    if (hedef) {
      e.preventDefault();

      hedef.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(function(element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", function() {
  let current = "";

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 170;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
  whatsappForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "905338373452";

    const text =
      "Merhaba, web sitenizden iletişime geçiyorum.%0A%0A" +
      "Ad Soyad: " + name + "%0A" +
      "Telefon: " + phone + "%0A" +
      "E-posta: " + email + "%0A" +
      "Proje Bilgisi: " + message;

    const url = "https://wa.me/" + whatsappNumber + "?text=" + text;

    window.open(url, "_blank");
  });
}