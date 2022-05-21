let myLibrary = [];

function Book(title, author, noPages, haveRead){
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.haveRead = haveRead;
};

Book.prototype.checkRead = function(){
    return this.haveRead ? 'have read' : 'not read yet';
};

Book.prototype.info = function(){
    return (`${this.title} by ${this.author}, ${this.noPages} pages, ${this.checkRead()}.`);
};

Book.prototype.changeReadStatus = function(){
    this.haveRead = !this.haveRead;
};


function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};

//Create card html element for each Book object
//Add status and remove button to each book with event listeners
function displayLibrary(){
    const books = document.getElementById("book-case");
    books.innerHTML = '';
    let i = 0;
    myLibrary.forEach((book) =>{
        let div = document.createElement('div');

        let title = document.createTextNode(book.title);
        let author = document.createTextNode(book.author);
        let pages = document.createTextNode(`${book.noPages} pages`);
        let haveRead = document.createTextNode(book.checkRead());

        let p1 = document.createElement('p');
        p1.appendChild(title);
        let p2 = document.createElement('p');
        p2.appendChild(author);
        let p3 = document.createElement('p');
        p3.appendChild(pages);
        let p4 = document.createElement('p');
        p4.appendChild(haveRead);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);

        let btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'card-buttons');

        let btn = document.createElement('button');
        btn.setAttribute('data-index', i);
        btn.setAttribute('class', 'remove-book');
        btn.appendChild(document.createTextNode('Remove'));
        btn.addEventListener('click', (e) =>{
            removeBook(e);
        });

        let changeRead = document.createElement('button');
        changeRead.setAttribute('class', 'status-btn');
        changeRead.setAttribute('data-index', i);
        changeRead.appendChild(document.createTextNode('Change Read Status'));
        changeRead.addEventListener('click', (e) => {
            changeStatus(e);
        });

        btnDiv.appendChild(changeRead);
        btnDiv.appendChild(btn);
        div.appendChild(btnDiv);
        books.appendChild(div);
        i++;
    });
};
//DUMMY CONTENT---------------- 
//addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
//addBookToLibrary('The Very Hungry Caterpillar','Eric Carle',32, true);
//addBookToLibrary('Dune', 'Frank Herbert', 755, false);
//-----------------------------

//Initial display
displayLibrary();

const cards = document.getElementById("book-cards");
const bookForm = document.getElementById('book-form');


//Functions to make form appear and close
function openForm(){
    bookForm.style.display = 'block';
}

function closeForm(){
    document.getElementById('bookForm').reset();
    bookForm.style.display = 'none';
    
}

//Get form submit data then add it to library
function stageBook(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('numberOfPages').value;
    let read = document.getElementById('haveRead').checked;
    if(validateInput(title, author, pages)){
        addBookToLibrary(title, author, parseInt(pages), read);
        displayLibrary();
        closeForm();
    }else{
        document.getElementById('bookForm').reportValidity();
    }
    
}

//Check if form fields are valid
function validateInput(title, author, pages){
    return (title != '' && author != '' && pages > 0);
}

//Remove book by index
function removeBook(e){
    let index = e.target.getAttribute('data-index');
    myLibrary.splice(index,1);
    displayLibrary();
}

//Change read status by index
function changeStatus(e){
    let i = e.target.getAttribute('data-index');
    myLibrary[i].changeReadStatus();
    displayLibrary();
}


