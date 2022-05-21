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


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const theVeryHungryCaterpillar = new Book('The Very Hungry Caterpillar','Eric Carle',32, true );
const Dune = new Book('Dune', 'Frank Herbert', 755, false);
//console.log(theHobbit.info());


function addBookToLibrary(book){
    myLibrary.push(book);
};

function displayLibrary(){
    //element append
};

addBookToLibrary(theHobbit);
addBookToLibrary(theVeryHungryCaterpillar);
addBookToLibrary(Dune);
console.table(myLibrary);
console.log(Dune.info());

const cards = document.getElementById("book-cards");
const bookForm = document.getElementById('book-form');

function openForm(){
    bookForm.style.display = 'block';
}

function closeForm(){
    bookForm.style.display = 'none';
}