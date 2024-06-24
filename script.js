const btnLogar = document.querySelector('#buttonLogin');
const userLogin = document.querySelector('#userLogin');
const userSenha = document.querySelector('#userSenha');

let coletaDados = function() {
  let usuario = {
    user : document.querySelector('#userLogin').value,
    senha : document.querySelector('#userSenha').value
  }
  return usuario
}