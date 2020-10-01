// Referencia o elemento da lista no html
var listElement = document.querySelector('#app ul');
// Referencia o elemento do input no html
var inputElement = document.querySelector('#app input');
// Referencia o elemento do button no html
var buttonElement = document.querySelector('#app button');

// Armazenar o lista do html no js
// var todos = [
//     'Fazer café',
//     'Estudar JavaScript',
//     'Acessar comunidade da Rockseat'
// ];

//Vai buscar os dados salvos no localStoage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Reinderizar a lista de todo na tela de html, através do js
function renderTodos() {
    //todo conteúdo que já estivar dentro da 'ul' no 'listElement', será removido, para que os valores que já estão armazenado, não sejam reinderixados juntos com o novo valor que irá ser adicionado
    listElement.innerHTML = '';

    //for especifico para array
    for (todo of todos) {
        //criando os elementos
        var todoElement = document.createElement('li');
        var linkElement = document.createElement('a');
        //atribuir atributo para o elemento
        var pos = todos.indexOf(todo); //vai procurar dentro do array a index do todo e vai retornar a posição dele
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); //concatenação de string utilizando o ++
        linkElement.setAttribute('href', '#');
        //colocando testo dentro do elemento
        var todoText = document.createTextNode(todo);
        var linkText = document.createTextNode(' Excluir');
        //adicionar o 'todoText', dentro do "todoElement"
        todoElement.appendChild(todoText);
        linkElement.appendChild(linkText);
        //adicionar o 'todoElement', dentro do "listElement"
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

//função para adiconar items a lista do todo
function addTodo() {
    // Recuperar o valor do input
    var todoText = inputElement.value;
    // Adicionar o todoText no array
    todos.push(todoText);
    //apagar o testo atual que estivar no input
    inputElement.value = '';
    //chamar a função "renderTodos", para ela reinderizar a lista de to_do novamente, como os novos items
    renderTodos();
    saveToStorage();
}

//chamar a função "addTodo" quando clicar no "button"
buttonElement.onclick = addTodo;

//funbção para excluir o to_do da lista
function deleteTodo(pos) {
    //remover uma quantida de items do array, baseado na posição que for passada
    todos.splice(pos, 1);
    //chamar a função "renderTodos", para ela reinderizar a lista de to_do novamente, como os novos items
    renderTodos();
    saveToStorage();
}
//função para salvar as informaçõe da lista do todo no storage
function saveToStorage(){

    //acessar o estorege
    //função 'setItem', vai setar um valor no storage
    //JSON.stringify, vai transforma o vetor em um string
    localStorage.setItem('list_todos',JSON.stringify(todos));

}