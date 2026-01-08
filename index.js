// 1. Select the header element
const bookStoreTitle = document.querySelector('#header');

// 2. Update the header text
bookStoreTitle.textContent = bookStore.name;

// 3. Select the book list container
const bookList = document.querySelector('#book-list');

// 4. Loop through all books and create elements
bookStore.books.forEach(book => {
    // Create book container
    const bookContainer = document.createElement('li');

    // Create book title
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Create book author
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;

    // Create book image
    const bookImage = document.createElement('img');
    bookImage.src = book.image;

    // Append title, author, and image to container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append container to the book list
    bookList.appendChild(bookContainer);
});


