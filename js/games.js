// Fetch games.json and render cards into any element with id "games-list"
async function renderGamesList() {
  const containers = document.querySelectorAll("#games-list");
  if (!containers.length) return;

  try {
    const resp = await fetch("data/games.json");
    const games = await resp.json();

    containers.forEach((container) => {
      // clear existing
      container.innerHTML = "";

      // read optional max limit from data-max attribute
      const maxAttr = parseInt(container.getAttribute("data-max"), 10);
      const max = Number.isFinite(maxAttr) && maxAttr > 0 ? maxAttr : games.length;

      // If container is a row placeholder, render up to `max` games as col-md-4
      games.slice(0, max).forEach((game) => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "card h-100";

        const img = document.createElement("img");
        img.className = "card-img-top";
        // Normalize image path (strip leading ../ if present)
        img.src = game.image && game.image.startsWith("../") ? game.image.replace(/^\.\.\//, "") : game.image || "image/project_image.png";
        img.alt = game.title || "";

        const body = document.createElement("div");
        body.className = "card-body";
        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = game.title || "Untitled";
        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = game.summary || "";

        body.appendChild(h5);
        body.appendChild(p);

        const footer = document.createElement("div");
        footer.className = "card-footer bg-transparent d-grid gap-2";

        const caseA = document.createElement("a");
        caseA.className = "btn button1 w-100";
        caseA.href = "game-project.html?id=" + encodeURIComponent(game.id);
        caseA.innerText = "Read case study";
        footer.appendChild(caseA);

        // optional demo button
        if (game.demo_url) {
          const demoA = document.createElement("a");
          demoA.className = "btn button2 w-100";
          demoA.href = game.demo_url;
          demoA.target = "_blank";
          demoA.rel = "noopener noreferrer";
          demoA.innerText = "Live demo";
          footer.appendChild(demoA);
        }

        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(footer);
        col.appendChild(card);
        container.appendChild(col);
      });
    });
  } catch (err) {
    console.error("Failed to load games.json", err);
    containers.forEach((c) => (c.innerText = "Failed to load projects."));
  }
}

// Run on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderGamesList);
} else {
  renderGamesList();
}
