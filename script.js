var form = document.querySelector("#form")
form.addEventListener('submit' , function(e) {
    e.preventDefault(); 
    var emailRes;
    var res = validate();
    console.log(res);
    if(res) {
      emailRes =  sendEmail();
    }
    if(emailRes) {
      sheetSubmission();
    }
})


function validate() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('.message').value;
    var err = document.querySelector('.error');
    var text ;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log(typeof name);
    // err.style.display = 'block';
    // err.style.height = '4rem';
    // console.log(name);
    // console.log(email);
    // console.log(message);
    if( name.length < 5 ) {
       text = "Please enter a valid name";
       err.textContent = text ;
       err.style.height = '4rem';
       return false;
    }
    else if(email.match(mailformat) === null) {
        text = "Please enter a valid email";
        err.textContent = text ;
        err.style.height = '4rem';
        return false;
    }
    else if(message.length < 30 ) {
        text = "Please enter a valid message";
        err.textContent = text ;
        err.style.height = '4rem';
        return false;
    }
    
    return true;
}

function sendEmail() {

  console.log("mail")
    const formData = new FormData(form) // got formdata
    // console.log(formData);
    // const FirstName = formData.get('fname');
    // const Email = formData.get('email');
    const message = formData.get('message');
    const body = 
    `Hi Kiran ,
     ${message}`;
    // created body string 
    
    const uri = `mailto:kiranpv903@gmail.com?body=${encodeURIComponent(body)}`;
    // created final uri to redirect to
    window.location.href = uri;
    return true;
}

function sheetSubmission() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx1Pv6nxABsCe-_PbBvkUipU99gjSJncnC9p5yPUAfqs_R6CNLkxIdAVzjjJkUJaiCJ5A/exec';
  const submitButton = document.querySelector(".submit-btn");
  submitButton.disabled = true
//    e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
    alert('Success!', response)
      submitButton.disabled = false;
    })
    .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false;
    })
}
// function validate(e) {
//     e.preventDefault();
//     var name = document.querySelector('#name').value;
//     var email = document.querySelector('#email').value;
//     var message = document.querySelector('.message').value;
//     var err = document.querySelector('.error');
//     var form = document.querySelector('#form');
//     const scriptUrl = 'https://script.google.com/macros/s/AKfycbzZ0aJEeVE3DnVWbFsF_MLbXVNMtnJVz8H70t7icAD8imtNMsP_dXGQh7IWNvg7fSF2/exec';
//     var text ;
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     // console.log(typeof name);
//     // err.style.display = 'block';
//     // err.style.height = '4rem';
//     // console.log(name);
//     // console.log(email);
//     // console.log(message);
//     if( name.length < 5 ) {
//        text = "Please enter a valid name";
//        err.textContent = text ;
//        err.style.height = '4rem';
//        return false;
//     }
//     else if(email.match(mailformat) === null) {
//         text = "Please enter a valid email";
//         err.textContent = text ;
//         err.style.height = '4rem';
//         return false;
//     }
//     else if(message.length < 30 ) {
//         text = "Please enter a valid message";
//         err.textContent = text ;
//         err.style.height = '4rem';
//         return false;
//     }

//     var data = new FormData(form);
//     console.log(data);
//     // var pro = fetch(scriptUrl , e => {method: 'POST' ; body: new FormData(form)})
//     // console.lo(pro);
//     // .then(response => console.log('Success!' ,  response))
//     // .catch(error => console.error('Error'))
//     return true;

// }