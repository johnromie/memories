const galleryRoot = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

if (galleryRoot && lightbox && lightboxImg) {
  galleryRoot.addEventListener("click", (e) => {
    const btn = e.target.closest?.("button.photo");
    if (!btn) return;

    const img = btn.querySelector("img");
    const src = img?.currentSrc || img?.src;
    if (!src) return;

    lightboxImg.src = src;
    lightbox.showModal();
  });
}
