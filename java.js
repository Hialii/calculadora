 let resultado =  document.getElementById('resultado')

function insert(num) {
   let numero = document.querySelector('#resultado').innerHTML
  resultado.innerHTML =  numero + num 
}

function clean() {
   resultado.innerHTML = ''
}

function back() {
   let result = document.querySelector("#resultado").innerHTML
  resultado.innerHTML = result.substring(0, result.length - 1); //O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string, ou seja, transfotmou o ultimo elemnto em 0, excluiu
}

function calcular() {
   let result = document.querySelector("#resultado").innerHTML

   if(result) {
      resultado.innerHTML = eval(result) //eval() que executa o código passado com os privilégios do caller
   } else {
      resultado.innerHTML = "ERROR"
   }
}