// Smooth scroll navigation (header 메뉴)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// CTA 버튼 스무스 스크롤
document.querySelectorAll('.btn[href^="#"]').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// Auto-update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Slider functionality for multiple sliders
document.querySelectorAll('.slider-container').forEach(sliderContainer => {
  const slider = sliderContainer.querySelector('.slider');
  const slides = sliderContainer.querySelectorAll('.slide');
  const prevButton = sliderContainer.querySelector('.slider-nav .prev');
  const nextButton = sliderContainer.querySelector('.slider-nav .next');
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
  }, 5000);
});
