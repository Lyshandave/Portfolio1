// PARTICLES BACKGROUND 
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00bfff" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  }
});

// TYPING EFFECT
const typingEl = document.querySelector(".typing-text");
if (typingEl) {
  const text = "Computer Technician";
  let i = 0;
  function typeText() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 100);
    }
  }
  typeText();
}

// SMOOTH SCROLL
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// AOS INIT
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  easing: 'ease-in-out'
});
// DEBOUNCE FUNCTION (ilagay ito sa taas ng scroll listener)
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
// FORCE AOS ANIMATION ON SCROLL UP & DOWN
window.addEventListener("scroll", debounce(function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelectorAll("[data-aos]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (inView) {
      el.classList.add("aos-animate");
    } else {
      el.classList.remove("aos-animate");
    }
  });
}, 100)); // 100ms delay
