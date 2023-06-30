# Bookify

Bookify is a React application that allows users to manage a collection of books. It utilizes advanced concepts such as Context API, centralized data store, and more to provide a seamless and efficient user experience.

### Bookify Home View
![bookify](https://i.imgur.com/LY9hL1H.png)

## Features

- Fetches a list of books from an API and displays them in a book list.
- Allows users to create new books and add them to the collection.
- Supports editing existing book titles.
- Enables users to delete books from the collection.

## Installation

To run Bookify locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/colson0x1/bookify.git
```

2. Navigate to the project directory:

```shell
cd bookify
```

3. Install the dependencies:

```shell
npm install
```

4. Start the development server:

```shell
npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access Bookify.

## Usage

Upon launching Bookify, you will see a page with a list of books. You can add new books by filling out the "Add a Book" form and clicking the "Create" button. Existing books can be edited by clicking the "Edit" button, which allows you to update the book title. To remove a book from the collection, simply click the "Delete" button.

## API Endpoints

Bookify interacts with a JSON-based API using the following endpoints:

- **Get all books:**

  ```
  GET http://localhost:3001/books
  ```

- **Create a book:**

  ```
  POST http://localhost:3001/books
  ```

  Request body:

  ```json
  {
    "title": "Making the New America"
  }
  ```

- **Update a book:**

  ```
  PUT http://localhost:3001/books/:id
  ```

  Request body:

  ```json
  {
    "title": "Making the New America - Part II"
  }
  ```

- **Delete a book:**

  ```
  DELETE http://localhost:3001/books/:id
  ```

## bookify api
![bookify api](https://i.imgur.com/Gyfjn9K.png)

## bookify data store
![bookify data store](https://i.imgur.com/48NVSC5.png)

## Architecture

Bookify follows a modular architecture, with components organized in separate files for better code organization and reusability. Here's an overview of the key files and their functionalities:

- **books.js:** This file defines the BooksContext using React's `createContext` function. It also provides the `Provider` component that wraps the entire application and manages the state of the books collection.

- **app.jsx:** The main entry point of the application. It initializes the BooksContext and fetches the list of books using the `fetchBooks` function from the context. The `BookList` and `BookCreate` components are rendered to display the book list and the form for adding new books, respectively.

- **api.http:** This file contains HTTP requests examples using the API endpoints provided by the JSON server. It demonstrates how to interact with the backend server to perform CRUD operations on the books collection.

- **index.js:** The entry point of the React application. It renders the `App` component within the `Provider` to ensure that the BooksContext is available to all child components.

- **use-books-context.js:** A custom hook that simplifies the usage of the BooksContext by providing a convenient way to access its values within functional components.

- **BookCreate.jsx:** Renders a form for creating new books. It uses the `createBook` function from the BooksContext to add the book to the collection.

- **BookList.jsx:** Displays the list of books fetched from the server. Each book is rendered using the `BookShow` component.

-

 **BookShow.jsx:** Represents an individual book item in the list. It allows users to edit the book title or delete the book from the collection using the corresponding buttons.

- **BookEdit.jsx:** Renders a form for editing the book title. It utilizes the `editBookById` function from the BooksContext to update the book's title.

## Technologies Used

Bookify is built using the following technologies and concepts:

- React: A popular JavaScript library for building user interfaces.
- Context API: A built-in state management solution in React that provides a way to share data across the component tree without prop drilling.
- React Hooks: Introduces state and other React features in functional components.
- Axios: A promise-based HTTP client for making API requests.
- JSON Server: A simple and lightweight server that provides a RESTful API based on a JSON file.

## License

This project is licensed under the [MIT License](LICENSE).

---

## Screenshots

### bookify when the data is empty
![bookify when the data is empty](https://i.imgur.com/vf8HDun.png)

### bookify create a new book
![bookify create a new book](https://i.imgur.com/laA3bIx.png)

### bookify add more books
![bookify add more books](https://i.imgur.com/lNfBnPS.png)

### bookify edit a book
![bookify edit a book](https://i.imgur.com/3MZjw11.png)

### bookify add a book
![bookify add a book](https://i.imgur.com/hsXKWzq.png)

### bookify delete a book
![bookify delete a book](https://i.imgur.com/hhpeHfy.png)

## bookify add more book
![bookify add more book](https://i.imgur.com/ZwRUqgs.png)