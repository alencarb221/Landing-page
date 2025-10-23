      //script para menu hamburger 
let btn = document.getElementById('btn-menu')
let menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  if(menu.style.display === "block"){
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
})
      //script de alerta botão Discover More
let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', () => {
  alert('Clicou só pra testar? Então parabéns, está funcionando!')
})
      //script de alerta botão Purchase Now
let btn02 = document.getElementById('btn02')

btn02.addEventListener('click', () => {
  alert('Obrigado pelo interesse! Nossa equipe entrará em contato em breve!')
})

      //script botão Register Now 
let btn03 = document.getElementById('btn03')

btn03.addEventListener('click', () => {
  let name = document.getElementById('name').value
let email =document.getElementById('email').value
let number = document.getElementById('number').value

  if(name === '' || email === '' || number === '') {
      alert('Por favor, preencha todos os campos antes de continuar.')
  } else {
      alert(`Cadastro realizado com sucesso! Enquanto isso, aproveite o visual do site.\n
      Nome: ${name}\n
      Email: ${email}\n
      Telefone: ${number}`)
  }
   
})


 