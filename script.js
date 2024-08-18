const container = document.getElementById('container');
const RegisterBtn = document.getElementById('Register');
const loginBtn = document.getElementById('login');

RegisterBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});