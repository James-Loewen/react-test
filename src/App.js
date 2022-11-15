import React, {Component} from 'react';
// import logo from './logo.svg';
import './main.scss';

const myLibrary = [
  {title: 'The Hobbit', author: 'J.R.R. Tolkien'},
  {title: 'The Giver', author: 'Lois Lowry'},
]

function App() {
  return (
    <div>
      <NewBookModal />
      <Library />
    </div>
  );
}

class NewBookModal extends Component {
  render() {
    return (
      <dialog id="new-book-dialog">
        <form className="flex" onSubmit={e => e.preventDefault()} autoComplete="off">
          <span>New book time!</span>
          <div className="input-group">
            <label htmlFor="title-input">Title:</label>
            <input type="text" id="title-input" name="title-input" required />
          </div>
          <div className="input-group">
            <label htmlFor="author-input">Author:</label>
            <input type="text" id="author-input" name="author-input" required />
          </div>
          <button type="submit" id="new-book-submit">Submit</button>
          <button type="button" id="cancel-input">Cancel</button>
        </form>
      </dialog>
    )
  }
}

class Library extends Component {
  constructor(props) {
    super(props)
    this.state = this.getBooks();
  }

  getBooks() {
    if (localStorage.miniLibrary) {
      return {bookList: JSON.parse(localStorage.miniLibrary)};
    } else {
      return {bookList: myLibrary};
    }
  }

  // componentDidUpdate(prevProps) {
  //   // this.props.bookList = 
  // }

  render() {
    return (
      <div className='card-container'>
        {this.state.bookList.map(book => {
          return (
          <Book key={`${book.title}${book.author}`} title={book.title} author={book.author} />
        )})}
      </div>
    )
  }
}

class Book extends React.Component {
  render() {
    return (
      <div className='card'>
        <span className='title'>{this.props.title}</span>
        <span className='author'>{this.props.author}</span>
        <Button class='read-status read' text='Read' />
        <Button class='delete-book' text='delete' />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.class}>{this.props.text}</button>
    );
  }
}

// export default App;
export default App;