document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        menuItem = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
})

//swiper 
const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
//form
document.querySelectorAll(".form__elem").forEach(function(u) {
  u.addEventListener("submit", function(e) {
      e.preventDefault();
      for (var e = u.closest(".form"), t = e.querySelector('.form__request'), n = e.querySelector(".form__answer"), i = u.elements, o = {}, r = 0; r < i.length; r++) {
          var s = i.item(r)
            , a = s.name
            , l = String(s.value).trim();
          if ("button" != s.tagName.toLowerCase()) {
              if ("" == l)
                  return !(s.style.border = "2px solid red");
              s.style.border = "none",
              o[a] = l,
              console.log(o)
          }
      }
      var c, d = "";
      for (c in o)
          d += "<b>".concat(c, "</b> ").concat(o[c], "\n");
      e = {
          method: "POST",
          headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              chat_id: "435805105",
              parse_mode: "HTML",
              text: d
          })
      };
      fetch("https://api.telegram.org/bot".concat("5054421186:AAHzIR1yfMB6n519LDXQ5-9911ZbdqulnEA", "/sendMessage"), e).then(function(e) {
          return e.json()
      }).then(function(e) {
          e.ok && (u.reset(),
          t.style.display = "none",
          n.style.display = "block")
      })
  })
})
const modalClose = document.querySelector('.modal__close'),
      modal = document.querySelector('.form__answer');
modalClose.addEventListener('click', function() {
      modal.hidden=true;
});
});


