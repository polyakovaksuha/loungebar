document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let translateValue = 0;
  
    prevBtn.addEventListener('click', function() {
      translateValue += 100;
      if (translateValue > 0) {
        translateValue = -(slider.children.length - 1) * 100;
      }
      slider.style.transform = `translateX(${translateValue}%)`;
    });
  
    nextBtn.addEventListener('click', function() {
      translateValue -= 100;
      if (translateValue < -(slider.children.length - 1) * 100) {
        translateValue = 0;
      }
      slider.style.transform = `translateX(${translateValue}%)`;
    });
  });