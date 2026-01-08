// Bookstore object
const bookStore = {
    name: "Flatbooks Technical Books",
    books: [
        {
            title: "Eloquent JavaScript: A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        {
            title: "HTML and CSS: Design and Build Websites",
            author: "Jon Duckett",
            image: "https://images-na.ssl-images-amazon.com/images/I/51x5+0FuSDL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        {
            title: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        }
    ]
};

// 1. Select the header element and update text
const bookStoreTitle = document.querySelector('#header');
bookStoreTitle.textContent = bookStore.name;

// 2. Select the book list container
const bookList = document.querySelector('#book-list');

// 3. Loop through the books and create elements dynamically
bookStore.books.forEach(book => {
    // Create container for each book
    const bookContainer = document.createElement('li');

    // Create title element
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Create author element
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;

    // Create image element
    const bookImage = document.createElement('img');
    bookImage.src = book.image;

    // Append title, author, and image to the book container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append the book container to the book list
    bookList.appendChild(bookContainer);
});


    
