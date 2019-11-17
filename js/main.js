//lazy load images
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});
//carousel  
var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
//checkboxes
let btns = document.querySelectorAll('.form__input_radio');
btns.forEach((e) => {
  e.addEventListener('click', () => {
    btns.forEach((elem) => {
      elem.classList.remove('active');
    })
    e.classList.add('active');
  });
});