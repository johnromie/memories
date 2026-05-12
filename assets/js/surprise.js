const btn = document.getElementById("openSurprise");
const modal = document.getElementById("surpriseModal");

if (btn && modal) {
  btn.addEventListener("click", () => modal.showModal());
}

