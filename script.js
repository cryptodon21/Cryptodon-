/* =========================================
   CRYPTODON PORTFOLIO — INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
  ========================================= */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");

      menuBtn.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });
  }


  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================================
     SCROLL REVEAL ANIMATIONS
  ========================================= */

  const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .hero-card, .about-text"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    observer.observe(element);
  });


  /* =========================================
     ACTIVE NAVIGATION
  ========================================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    'nav a[href^="#"]'
  );


  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {

          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================================
     PROJECT CARD TILT
  ========================================= */

  const projectCards =
    document.querySelectorAll(".project-card");


  projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

      if (window.innerWidth < 900) return;

      const rect = card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const centerX = rect.width / 2;
      const centerY = rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -2;

      const rotateY =
        ((x - centerX) / centerX) * 2;


      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });


  /* =========================================
     SKILL CARD HOVER
  ========================================= */

  const skillCards =
    document.querySelectorAll(".skill-card");


  skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });

  });


  /* =========================================
     HERO CARD MOUSE EFFECT
  ========================================= */

  const heroCard =
    document.querySelector(".hero-card");


  if (heroCard) {

    heroCard.addEventListener("mousemove", event => {

      if (window.innerWidth < 900) return;

      const rect =
        heroCard.getBoundingClientRect();


      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const rotateY =
        ((x / rect.width) - 0.5) * 6;

      const rotateX =
        ((y / rect.height) - 0.5) * -6;


      heroCard.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    });


    heroCard.addEventListener("mouseleave", () => {

      heroCard.style.transform = "";

    });

  }


  /* =========================================
     DYNAMIC YEAR
  ========================================= */

  const year =
    document.querySelector(".current-year");


  if (year) {
    year.textContent =
      new Date().getFullYear();
  }


  /* =========================================
     COPY EMAIL
  ========================================= */

  const emailLinks =
    document.querySelectorAll(
      'a[href^="mailto:"]'
    );


  emailLinks.forEach(link => {

    link.addEventListener("contextmenu", () => {

      navigator.clipboard?.writeText(
        "ajaoemmanuel631@gmail.com"
      );

    });

  });


  /* =========================================
     EXTERNAL LINK FEEDBACK
  ========================================= */

  const externalLinks =
    document.querySelectorAll(
      'a[target="_blank"]'
    );


  externalLinks.forEach(link => {

    link.addEventListener("click", () => {

      link.classList.add("clicked");

      setTimeout(() => {
        link.classList.remove("clicked");
      }, 500);

    });

  });


  /* =========================================
     BACK TO TOP
  ========================================= */

  const backTop =
    document.createElement("button");

  backTop.className = "back-top";
  backTop.innerHTML = "↑";
  backTop.setAttribute(
    "aria-label",
    "Back to top"
  );

  document.body.appendChild(backTop);


  window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  });


  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  /* =========================================
     CONSOLE BRANDING 😎
  ========================================= */

  console.log(
    "%cCRYPTODON.",
    "font-size:28px;font-weight:800;color:#b7ff2a;"
  );

  console.log(
    "%cFrontend Developer • Software Engineer",
    "font-size:13px;color:#888;"
  );

});
