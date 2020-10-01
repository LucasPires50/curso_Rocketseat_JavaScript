
// Para começar uma requisiçao ajax,
// Definir uma variavel, com a classe "new XMLHttpRequest()
var xhr = new XMLHttpRequest();

//Pegar o url para trazer os dados
xhr.open('GET','https://api.github.com/users/LucasPires50');
xhr.send(null);

//Validação para retonar as informação do servidor
xhr.onreadystatechange = function(){
    
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));        
    }
}