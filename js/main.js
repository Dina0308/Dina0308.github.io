new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.project-pagination',
    bulletClass: 'project_bullet',
        bulletActiveClass: 'project_bullet_active',
        clickable: true,
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
  },
});