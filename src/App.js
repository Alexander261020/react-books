import './App.css';
/* import HelloWorld from './HW'; */
import BookList from './booksList';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={props.books}/>
      </header>
    </div>
  );
}


export default App;
