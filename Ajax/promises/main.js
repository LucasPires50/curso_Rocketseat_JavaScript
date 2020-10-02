var minhaPromise = function () {
    //o retorno desse função será uma promise
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github74.com/users/LucasPires50');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            // "4" é a variavel que siginifica, quando a resposta do servidor volto.
            if (xhr.readyState === 4) {
                //cod. 200 quer dizer que a requisição teve sucesso.
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    //Caso o resultado não seja de sucesso na requisição
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
}
//Exibir o resultado que a promise retornou
minhaPromise()
    //".then", vai ser execultado quando chamar o resolve na promisse
    .then(function (response) {
        console.log(response);
    })
    //".catch", vai ser execultado quando chamar o reject na promisse
    .catch(function (error) {
        //".warn" é para avisar do erro
        console.warn(error);
    });