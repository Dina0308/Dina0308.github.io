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
let forms = document.querySelectorAll('.form__elem');



  forms.forEach( form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let formWrapper = form.closest('.form')
      let request = formWrapper.querySelector('.form__request');
      let answer = formWrapper.querySelector('.form__answer');




      let inputs = form.elements;
      let obj = {};

      for (let i = 0; i < inputs.length; i++) {



        let item = inputs.item(i)
        let name = item.name;
        let val = String(item.value).trim();
        let tag = item.tagName.toLowerCase();

        if (tag == 'button') {
          continue;
        }


        if (val == ""){
          item.style.border = "2px solid red";
          return false;
        } else {
          item.style.border = "none";
          obj[name] = val;
        } 

        console.log(obj);
      }

      //В переменную $token нужно вставить токен, который нам прислал @botFather
      const token = "5054421186:AAHzIR1yfMB6n519LDXQ5-9911ZbdqulnEA";
      //Сюда вставляем chat_id
      const chatId = "435805105";

      let text = '';
      for( let key in obj ) {
        text += `<b>${key}</b> ${obj[key]}\n`;
      }

      const parse_mode = "HTML";

      const requestOptionsPush = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { chat_id: chatId, parse_mode: parse_mode, text: text }
        )
      };

      fetch(`https://api.telegram.org/bot${token}/sendMessage`, requestOptionsPush)
        .then(response => response.json())
        .then(response => {
          if (response.ok) {
            form.reset();
            request.style.display = "none"
            answer.style.display = "block"


          }
        });



    });
  });

