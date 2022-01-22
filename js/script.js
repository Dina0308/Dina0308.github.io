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
// let forms = document.querySelectorAll('.form__elem');



//   forms.forEach( form => {
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();

//       let formWrapper = form.closest('.form')
//       let request = formWrapper.querySelector('.form__request');
//       let answer = formWrapper.querySelector('.form__answer');




//       let inputs = form.elements;
//       let obj = {};

//       for (let i = 0; i < inputs.length; i++) {



//         let item = inputs.item(i)
//         let name = item.name;
//         let val = String(item.value).trim();
//         let tag = item.tagName.toLowerCase();

//         if (tag == 'button') {
//           continue;
//         }


//         if (val == ""){
//           item.style.border = "2px solid red";
//           return false;
//         } else {
//           item.style.border = "none";
//           obj[name] = val;
//         } 

//         console.log(obj);
//       }

//       //В переменную $token нужно вставить токен, который нам прислал @botFather
//       const token = "5054421186:AAHzIR1yfMB6n519LDXQ5-9911ZbdqulnEA";
//       //Сюда вставляем chat_id
//       const chatId = "435805105";

//       let text = '';
//       for( let key in obj ) {
//         text += `<b>${key}</b> ${obj[key]}\n`;
//       }

//       const parse_mode = "HTML";

//       const requestOptionsPush = {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(
//           { chat_id: chatId, parse_mode: parse_mode, text: text }
//         )
//       };

//       fetch(`https://api.telegram.org/bot${token}/sendMessage`, requestOptionsPush)
//         .then(response => response.json())
//         .then(response => {
//           if (response.ok) {
//             form.reset();
//             request.style.display = "none"
//             answer.style.display = "block"


//           }
//         });



//     });
//   });
var a = document.querySelectorAll(".portfolio__youtube-link")
      , l = document.getElementById("youtube-modal")
      , e = document.getElementById("youtube-close")
      , c = document.getElementById("youtube-frame");
    a.forEach(function(t) {
        t.addEventListener("click", function(e) {
            e.preventDefault();
            e = t.dataset.id;
            c.src = "https://www.youtube.com/embed/".concat(e, "?controls=0"),
            setTimeout(function() {
                l.style.display = "block"
            }, 1e3)
        })
    }),
e.addEventListener("click", function(e) {
  e.preventDefault(),
  c.src = "",
  l.style.display = "none"
}),
document.querySelectorAll(".form__elem").forEach(function(u) {
  u.addEventListener("submit", function(e) {
      e.preventDefault();
      for (var e = u.closest(".form"), t = e.querySelector(".form__request"), n = e.querySelector(".form__answer"), i = u.elements, o = {}, r = 0; r < i.length; r++) {
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

