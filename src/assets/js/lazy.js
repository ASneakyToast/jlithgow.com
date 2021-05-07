const imageObserver = new IntersectionObserver(( entries, imgObserver ) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
      imgObserver.unobserve(lazyImage);
    }
  });
});

const arr = document.querySelectorAll('img.lazy');
arr.forEach((item) => {
    imageObserver.observe(item);
})
