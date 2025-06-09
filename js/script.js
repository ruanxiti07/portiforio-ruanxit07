// Alterna o Tema
document.getElementById("temaToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  document.getElementById("temaToggle").textContent = isDark ? "☀️" : "🌙";
});