import './App.css';
/* import HelloWorld from './HW'; */
import BookList from './booksList';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld /> */}
        <BookList books={props.books}/>
      </header>
    </div>
  );
}


export default App;
