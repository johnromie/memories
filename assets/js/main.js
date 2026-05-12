const initYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
};

const rand = (min, max) => Math.random() * (max - min) + min;

const spawnHearts = () => {
  const host = document.querySelector(".hearts");
  if (!host) return;

  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduceMotion) return;

  const count = window.innerWidth < 520 ? 16 : 26;
  for (let i = 0; i < count; i += 1) {
    const h = document.createElement("i");
    h.className = "heart";
    h.style.setProperty("--x", `${rand(2, 98)}vw`);
    h.style.setProperty("--s", `${rand(10, 26)}px`);
    h.style.setProperty("--d", `${rand(10, 20)}s`);
    h.style.setProperty("--drift", `${rand(-28, 28)}px`);
    h.style.animationDelay = `${rand(-20, 0)}s`;
    host.appendChild(h);
  }
};

const bindDialogClose = (root = document) => {
  root.querySelectorAll("dialog").forEach((dlg) => {
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
    });
  });

  root.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dlg = btn.closest("dialog");
      if (dlg?.open) dlg.close();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document.querySelectorAll("dialog[open]").forEach((dlg) => dlg.close());
  });
};

initYear();
spawnHearts();
bindDialogClose();

