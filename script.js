const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function atualizarIcone() {
  themeIcon.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
}

atualizarIcone();

toggleButton.addEventListener("click", () => {
  html.classList.toggle("dark");

  const temaAtual = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", temaAtual);

  atualizarIcone();
});
