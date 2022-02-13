/*"var" = variavel de escopo(está em determinado local, como dentro das chaves) global, pode ser usado em todo código;"let" é apenas local(boas práticas); "const" é global mas não muda seu valor.*/

let nome = window.document.getElementById("nome") /*uma das formas de acessar o DOM (no caso o campo nome, que está no 'contato')*/

/*O DOM também pode ser acessaro por tag (getElementByTagName());
por ID (getElementById());
por nome do elemento (getElementsByName())
por classe, que busca vários elementos (getElementsByClassName()) é "chamada" usando o .(ponto)
por seletor (querySelector()) <- mais usado. É "chamada" usando a # */

let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false /*essa e as duas seguintes são de validações fakes de "email enviado", o email não é enviado de verdade*/
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

/*para validação de campos tem que ser chamada uma função antes*/

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome incompleto" /*aparece em forma de mensagem e não caixa de diálogo*/
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = " "
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@")== -1 || email.value.indexOf(".") == -1) { /*se no texto que foi digitado (analisado pelo indexOf) não tem o @ (não tem é  = -1)...*/
        txtEmail.innerHTML = "E-mail inválido" /*aparece em forma de mensagem e não caixa de diálogo*/
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = " "
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres."
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block" /*nos casos acima coloquei apenas em branco o else para quenão aparecesse mensagem de válido,
        mas o correto é adicionar essa linha e a seguinte de else*/
        assuntoOk=false //caso não force o False nesta linha, a função enviar() não respeita o && e envia o formulário (obs do Evandro)
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

/*OBS do Evandro: Se você escreve nos campos 'nome' e 'email' corretamente e deixa a caixa de 'assunto' vazia, ao tentar enviar ele vai acusar erro. Uma vez que a lógica da função enviar() está válida apenas os valores das variáveis nomeOk e emailOk estão como true enquanto assuntoOk está false. 
Porém, caso você digite um 'nome' e 'email' válidos e digite além do limite estipulado dentro da caixa 'assunto' (no exemplo dado em aula 100 caracteres) em vez da função enviar() acusar erro, ela informa que o formulário foi enviado com sucesso, devido a lógica utilizada no validaAssunto(),
a partir do momento que você digita qualquer coisa dentro do campo 'assunto' ele automaticamente cai no "else" da função validaAssunto() alterando o valor da variável assuntoOk para true. 
Deste modo é necessário forçar que o valor da variável retorne para false uma vez ultrapassado o limite de caracteres (acrescentado acima) */ 


function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    }
    else {
        alert ("O fomulário não foi preenchido corretamente. Por favor, complete as informações solicitadas")
    }
}

function mapaZoom() {
    mapa.style.width = "700px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}