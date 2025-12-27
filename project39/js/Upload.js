document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const project = {
      title: title.value,
      author: author.value,
      desc: desc.value,
      img: img.value
    };

    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    window.location.replace("profile.html");
  });
});
