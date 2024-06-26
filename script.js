const btnLogar = document.querySelector('#buttonLogin');
const btnVoltar = document.querySelector('#voltar');
let coletaDados = async function() {
  let usuario = {
    user : document.querySelector('#userLogin').value,
    senha : document.querySelector('#userSenha').value
  }
  const resposta = await enviarDados(usuario);
  if(resposta.message === 'Invalid credentials'){
    alert('As credenciais não estão registradas')
  }
  else{
    document.querySelector('.container__login').style.display = "none";
    document.querySelector('.container__resultado').style.display = "flex";
    const x = document.getElementById('imgPessoa').src = resposta.image;
    console.log(resposta)
    document.getElementById('id').textContent += resposta.id;
    document.getElementById('userNameResult').textContent += resposta.username;
    document.getElementById('name').textContent += resposta.firstName;
    document.getElementById('sobrenome').textContent += resposta.lastName;
    document.getElementById('sexo').textContent += resposta.gender;
    document.getElementById('email').textContent += resposta.email;
  }
  
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