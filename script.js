const inputUsername = document.querySelector('#textUsername')
const inputEmail = document.querySelector('#textEmail')
const inputPassword = document.querySelector('#textPassword')

const submitBtn = document.querySelector('.submitButton')
const out1 = document.querySelector('#p1')
const out2 = document.querySelector('#p2')
const out3 = document.querySelector('#p3')

function submit() {
    out1.innerHTML = inputUsername.value
    out2.innerHTML = inputEmail.value
    out3.innerHTML = inputPassword.value

}
function output() {
    out1
    out2
    out3
}
submitBtn.addEventListener('click', output())