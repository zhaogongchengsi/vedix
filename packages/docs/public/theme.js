window.addEventListener("load", () => {
  const body = document.documentElement;

  body.classList.add("slate-theme");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
