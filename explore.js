const grid = document.querySelector(".project-grid");
const projects = JSON.parse(localStorage.getItem("projects")) || [];

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${p.img}">
    <div class="project-content">
      <h3>${p.title}</h3>
      <span class="tech">${p.tech}</span>
      <p>By: ${p.author}</p>
      <p>${p.desc}</p>
    </div>
  `;

  grid.appendChild(card);
});
