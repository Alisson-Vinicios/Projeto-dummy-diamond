const btnLogar = document.querySelector('#buttonLogin');
const userLogin = document.querySelector('#userLogin');
const userSenha = document.querySelector('#userSenha');


btnLogar.addEventListener('click', () =>{
  var loginUserAtual = userLogin.value;
  var senhaUserAtual = userSenha.value;

  fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: loginUserAtual,
      password: senhaUserAtual,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then(console.log);
})
