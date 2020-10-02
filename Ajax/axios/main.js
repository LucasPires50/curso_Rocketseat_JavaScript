axios.get('https://api.github.com/users/LucasPires50')
    //".then", vai ser execultado quando chamar o resolve na promisse
    .then(function (response) {
        console.log(response);
    })
    //".catch", vai ser execultado quando chamar o reject na promisse
    .catch(function (error) {
        //".warn" é para avisar do erro
        console.warn(error);
    });