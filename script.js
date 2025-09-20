// Reveal on scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Run once on load
document.addEventListener("DOMContentLoaded", function () {
  /* arrow onclick scroll down */
  const arrow = document.querySelector(".arrow");
  if (arrow) {
    arrow.addEventListener("click", () => {
      const scrollDistance = window.innerHeight;
      window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  /* bottom-to-top button */
  const btn = $("#button");
  if (btn.length) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* navigation links scroll to section */
  const navItems = document.querySelectorAll(".__container [data-section]");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
