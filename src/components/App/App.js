import './App.css';
import React, {Component} from "react";
import BooksService from "../repository/booksRepository";
import Categories from "../Categories/categories";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Header from "../Header/header";
import BookAdd from "../Books/BookAdd/BookAdd";
import Books from "../Books/BookList/books";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {

  constructor(props) {

    super(props);
      this.state = {
          books: [],
          categories: [],
          authors: [],
          selectedBook: {},
      }
  }

  render() {
    return(
        <Router>
          <Header/>
          <main>
            <div className={"container"}>

                <Route path={"/books/categories"} exact render={() =>
                    <Categories categories={this.state.categories}/>}/>

                <Route path={"/books/add"} exact render={() =>
                    <BookAdd categories={this.state.categories}
                             authors={this.state.authors}
                             onAddBook={this.addBook}/>}/>

                <Route path={"/books/edit/:id"} exact render={() =>
                    <BookEdit categories={this.state.categories}
                              authors={this.state.authors}
                              onEditBook={this.editBook}
                              book={this.state.selectedBook}/>}/>

                <Route path={"/books"} exact render={() =>
                    <Books books={this.state.books}
                           onDelete={this.deleteBook}
                           onEdit={this.getBook}
                           onTakenBook={this.takenBook}/>}/>

                <Route path={"/"} exact render={() =>
                    <Books books={this.state.books}
                           onDelete={this.deleteBook}
                           onEdit={this.getBook}
                           onTakenBook={this.takenBook}/>}/>

                <Redirect to={"/books"}/>
            </div>
          </main>
        </Router>
    )
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadBooks();
    this.loadCategories();
  }

  loadAuthors = () => {
      BooksService.fetchAuthors()
        .then((data) => {
          this.setState({
            authors: data.data
          })
        });
  }

  loadBooks = () => {
      BooksService.fetchBooks()
        .then((data) => {
          this.setState({
            books: data.data
          })
        });
  }

  loadCategories = () => {
      BooksService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        });
  }

  deleteBook = (id) => {
      BooksService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        })
  }

  addBook = (name, category, author, availableCopies) => {
      BooksService.addBook(name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }

  getBook = (id) => {
      BooksService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
        });
  }

  editBook = (id, name, category, author, availableCopies) => {
      BooksService.editBook(id, name, category, author, availableCopies)
        .then(() => {
          this.loadBooks()
        });
  }

  takenBook = (id) => {
      BooksService.takenBook(id).then(() => this.loadBooks());
  }


}
export default App;