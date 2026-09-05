// Wires up the footer light/dark toggle. The initial theme is applied by a
// small inline script in each page's <head> so there is no flash on load.
(function () {
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  button.addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme");
    if (!current) {
      // No explicit choice yet — flip away from whatever the OS is giving us.
      current = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    var next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked — the choice just won't persist */
    }
  });
})();
