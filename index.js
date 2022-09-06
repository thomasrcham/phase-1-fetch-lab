let books = [];

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then( (response) => (response.json()))
  .then( (response) => books = response)
  .then( books => books.forEach(books => renderBooks(books)));
}

function renderBooks(books) {
  const main = document.querySelector('main');
    debugger;
    const h2 = document.createElement('h2');
    h2.innerHTML = books.name;
    main.appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});
