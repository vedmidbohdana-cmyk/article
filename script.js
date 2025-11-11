document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  const desktopShare = document.getElementById("socialShare");
  const mobileShare = document.getElementById("mobileSharePanel");
  const closeBtn = document.getElementById("closeMobileShare");
  const blogImage = document.querySelector(".image-container img");

  const isMobile = window.innerWidth <= 768;

  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isMobile) {
      const isOpen = mobileShare.classList.toggle("visible");
      blogImage.classList.toggle("zoomed", isOpen);
    } else {
      const isVisible = desktopShare.classList.toggle("visible");
      blogImage.classList.toggle("zoomed", isVisible);
    }
  });

  document.addEventListener("click", () => {
    desktopShare.classList.remove("visible");
    mobileShare.classList.remove("visible");
    blogImage.classList.remove("zoomed");
  });

  desktopShare.addEventListener("click", (e) => e.stopPropagation());
  mobileShare.addEventListener("click", (e) => e.stopPropagation());

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileShare.classList.remove("visible");
      blogImage.classList.remove("zoomed");
    });
  }

  window.addEventListener("resize", () => {
    location.reload();
  });
});
