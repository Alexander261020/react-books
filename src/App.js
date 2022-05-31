import './App.css';
import BookList from './booksList';

function App(props) {
  return (
    <div className="App" style={styles.none}>
      <header className="App-header" style={styles.appHeader}>
        <img src="./book.png"></img>
        <img src="/book.png"></img>
        <img src="react/books/src/book.png"></img>
        <img src="/home/alexandr/code/react/books/src/book.png"></img>
        <img src='/home/alexandr/code/react/books/src/book.png'></img>
        <img src='/home/alexandr/code/react/books/src/book.png'></img>
        <img src="./book.png" alt="portlandlogo"/>
        Сервис по подбору книг
      </header>
      <BookList books={props.books}/>
      <footer>&copy;
      </footer>
    </div>
  );
}

export default App;

const styles = {
  appHeader: {
    textAlign: 'center',
    fontSize: '20px',
    background: 'grey',
    padding: '10px',
  },
  none: {
    padding: '0',
    maigin: '0',
  }
}
