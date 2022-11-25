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
 
  // redirected to the uri
})