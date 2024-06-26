const btnLogar = document.querySelector('#buttonLogin');

let coletaDados = function() {
  let usuario = {
    user : document.querySelector('#userLogin').value,
    senha : document.querySelector('#userSenha').value
  }
  let obj = enviarDados(usuario)
}

btnLogar.addEventListener('click', () => {
  coletaDados();
})

let enviarDados = function(buscaUsuario){
  fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: buscaUsuario.user,
      password: buscaUsuario.senha,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then(console.log);
}
