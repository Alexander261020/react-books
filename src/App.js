import './App.css';
import BookList from './booksList';

function App(props) {
  return (
    <div className="App" style={styles.none}>
      <div id="info-book"></div>
      <header className="App-header" style={styles.appHeader}>
        Сервис по подбору книг!
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
