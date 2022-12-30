new Swiper('.image-slider',{
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

        // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
    dynamicBullets: true,
  },
  simulateTouch: false,
});