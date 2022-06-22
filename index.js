class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

}

class User {
    addBook(book) {

        let list = document.getElementById('tbody');
        let row = document.createElement('tr');
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td><a href="" class="delete">x</td>`;
        list.appendChild(row);
    }

     removeBook(book){
    if(book.className === 'delete'){
        book.remove();
    }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('genre').value = '';
    }
}


document.getElementById('inputUser').addEventListener('submit', newBook)


function newBook(e) {
    let getTitle = document.getElementById('title').value;
    let getAuthor = document.getElementById('author').value;
    let getGenre = document.getElementById('genre').value;
    let newbook = new Book(getTitle, getAuthor, getGenre);

    if (getTitle === '' || getAuthor === '' || getGenre === ''){
        let createDiv = document.createElement('div');
        createDiv.innerHTML = 'Must not be blank';
    }
    let user = new User();
    user.addBook(newbook);
    user.clearFields();
    e.preventDefault();
    
    
}

document.getElementById('tbody').addEventListener('click', deleteBook);

function deleteBook(e){
    let user = new User();
    user.removeBook(e.book);
    e.preventDefault();
}