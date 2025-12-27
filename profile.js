document.addEventListener("DOMContentLoaded", () => {

  console.log("Profile JS loaded");

  const loggedIn = localStorage.getItem("loggedIn");
  console.log("loggedIn =", loggedIn);

  if (loggedIn !== "true") {
    window.location.replace("login.html");
    return;
  }

  const grid = document.getElementById("projectGrid");
  if (!grid) {
    console.error("projectGrid not found");
    return;
  }

  const raw = localStorage.getItem("projects");
  console.log("projects raw =", raw);

  const projects = raw ? JSON.parse(raw) : [];

  if (projects.length === 0) {
    grid.innerHTML = "<p style='color:#aaa'>No projects uploaded yet.</p>";
    return;
  }

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${p.img && p.img.trim() ? p.img : 'images/default.jpg'}">
      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;

    grid.appendChild(card);
  });

});
