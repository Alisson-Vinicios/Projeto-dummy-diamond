const btnLogar = document.querySelector('#buttonLogin');

let coletaDados = async function() {
  let usuario = {
    user : document.querySelector('#userLogin').value,
    senha : document.querySelector('#userSenha').value
  }
  const resposta = await enviarDados(usuario);
  console.log(resposta);
}

btnLogar.addEventListener('click', () => {
  coletaDados();
})

let enviarDados = function(buscaUsuario){
  const usuarioAtual = fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: buscaUsuario.user,
      password: buscaUsuario.senha,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json());
  
  return usuarioAtual
}