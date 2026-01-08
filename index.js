const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
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


