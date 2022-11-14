import React from 'react';
import logo from './logo.svg';
import './main.scss';

const myLibrary = [
  {title: 'The Hobbit', author: 'J.R.R. Tolkien'},
  {title: 'The Giver', author: 'Lois Lowry'},
]

function App() {
  return (
    <div>
      {myLibrary.map(book => {
        <Book title={book.title} author={book.author} />
      })}
    </div>
  );
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