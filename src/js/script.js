import "../sass/style.scss";
import JustValidate from 'just-validate';


const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
close.addEventListener('click', () => {
    menu.classList.remove('active')
    
});

const counters = document.querySelectorAll('.progress__persent'),
    lines = document.querySelectorAll('.progress__rectangle-orange');


counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const validator = new JustValidate('#form');

validator
  .addField('#name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
])
  .addField('#text', [
    {
      rule: 'required',
      },
    {
        rule: 'minLength',
        value: 10,
      },
])
    .addField('#checkbox', [
    {
      rule: 'required',
        },
    ])
    .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
 		});
		})       

