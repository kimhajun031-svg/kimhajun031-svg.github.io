// ===== Modal Zoom 기능 =====
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");
  const galleryImgs = document.querySelectorAll(".product-gallery img");

  let scale = 1;
  let isDragging = false;
  let startX, startY, currentX = 0, currentY = 0;

  // 이미지 클릭 시 모달 열기
  galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      scale = 1; currentX = 0; currentY = 0;
      modalImg.style.transform = "translate(0,0) scale(1)";
    });
  });

  // 닫기 버튼
  if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
  }

  // 모달 배경 클릭 시 닫기
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // 휠 줌
  modalImg.addEventListener("wheel", e => {
    e.preventDefault();
    if (e.deltaY < 0) scale *= 1.1;
    else scale /= 1.1;
    scale = Math.min(Math.max(1, scale), 5); // 1~5배 제한
    modalImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
  });

  // 드래그 이동
  modalImg.addEventListener("mousedown", e => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    modalImg.style.cursor = "grabbing";
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
    modalImg.style.cursor = "grab";
  });
  window.addEventListener("mousemove", e => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    modalImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
  });

  // 더블클릭으로 확대/리셋
  modalImg.addEventListener("dblclick", () => {
    if (scale > 1) {
      scale = 1; currentX = 0; currentY = 0;
    } else {
      scale = 2;
    }
    modalImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
  });
});
