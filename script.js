let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

function submitForm(){
    alert("Message Sent");
}


//JS Code for googlesheet linking
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwPyxF72leS4IG58vuGL072WMDL5QTnzD3-tRvl8xIQp4dgN8T73VY0z8ktUSGTjgdBZA/exec'
    const form = document.forms['contact-form']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })