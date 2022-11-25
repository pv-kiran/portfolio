// const btn = document.querySelector('#submit');
// const form = document.querySelector('#subscription');


// btn.addEventListener('click', (e) => {
//     // prevent the form from submitting
//     e.preventDefault();

//     // show the form values
//     const formData = new FormData(form);
//     const values = [...formData.entries()];
//     console.log(values);
// });

const form = document.getElementById('form')
// selected form from DOM

form.addEventListener('submit', (e) => { // added submit event listener on form
  e.preventDefault() // preventing page reload
  const formData = new FormData(form) // got formdata
  console.log(formData);
  const FirstName = formData.get('fname')
  const Email = formData.get('email')

  const body = 
  `FirstName=${FirstName}
  Email=${Email}`
  // created body string 
  
  const uri = `mailto:kiranpv903@gmail.com?body=${encodeURIComponent(body)}`;
  // created final uri to redirect to
  window.location.href = uri
  // redirected to the uri
})