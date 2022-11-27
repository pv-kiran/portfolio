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

// const form = document.getElementById('form')
// // selected form from DOM

// form.addEventListener('submit', (e) => { // added submit event listener on form
//   e.preventDefault() // preventing page reload
 
//   // redirected to the uri
// })

const form = document.querySelector("#form")
const submitButton = document.querySelector(".submit-btn")
const scriptURL = 'https://script.google.com/macros/s/AKfycbx1Pv6nxABsCe-_PbBvkUipU99gjSJncnC9p5yPUAfqs_R6CNLkxIdAVzjjJkUJaiCJ5A/exec';

form.addEventListener('submit', e => {
   submitButton.disabled = true
   e.preventDefault()
   let requestBody = new FormData(form)
   fetch(scriptURL, { method: 'POST', body: requestBody})
     .then(response => {
     alert('Success!', response)
       submitButton.disabled = false
     })
     .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false
     })
})