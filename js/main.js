let input = document.querySelector('.campo-input');
let mensaje_error = document.querySelector('.error-msj');
let div_error = document.querySelector('.error');
let btn = document.querySelector('.boton')

let regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let timer = setInterval(() => {
    div_error.style.display = 'none'
    mensaje_error.style.display = 'none'
},3000)

btn.addEventListener('click',() => {
    if(input.value === '' || !(input.value.match(regExpMail))){
        div_error.style.display = 'inline-block'
        mensaje_error.style.display = 'flex'
        mensaje_error.textContent = 'Please provide a valid email address'
    }else{
        mensaje_error.style.display = 'flex'
        mensaje_error.style.color = 'green'
        mensaje_error.textContent = 'Thank you for subscribing to our newsletter!'
    }
    return timer;
})