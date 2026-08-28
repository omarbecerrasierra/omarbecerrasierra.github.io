(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const storedTheme = getStoredTheme();
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      try {
        localStorage.setItem("omar-site-theme", nextTheme);
      } catch (_error) {
        // The selected theme still applies for this visit when storage is unavailable.
      }
    });
  }

  function getStoredTheme() {
    try {
      const value = localStorage.getItem("omar-site-theme");
      return value === "dark" || value === "light" ? value : null;
    } catch (_error) {
      return null;
    }
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    if (themeToggle) {
      const nextTheme = theme === "dark" ? "light" : "dark";
      themeToggle.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      themeToggle.setAttribute("title", "Switch to " + nextTheme + " theme");
    }
  }

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuToggle && mobileNav && header) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        setMenuState(false);
      }
    });
  }

  function setMenuState(isOpen) {
    if (!menuToggle || !mobileNav || !header) return;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    mobileNav.classList.toggle("is-open", isOpen);
    header.classList.toggle("menu-active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }

  const revealElements = document.querySelectorAll("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
  const observedSections = Array.from(navLinks)
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-active", isCurrent);
            if (isCurrent) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-30% 0px -60%", threshold: 0 }
    );

    observedSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  const portrait = document.querySelector(".portrait-wrap img");
  if (portrait) {
    portrait.addEventListener("error", function () {
      portrait.hidden = true;
    });
  }
})();
