const search = document.getElementById("search");
    const searchable = [...document.querySelectorAll(".searchable, .card, .step")];
    search.addEventListener("input", () => {
      const phrase = search.value.trim().toLocaleLowerCase("pl");
      searchable.forEach(element => {
        const matches = !phrase || element.textContent.toLocaleLowerCase("pl").includes(phrase);
        element.classList.toggle("search-hidden", !matches);
      });
    });

    const links = [...document.querySelectorAll('nav a[href^="#"]')];
    const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    sections.forEach(section => observer.observe(section));

    document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
