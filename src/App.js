import BookList from "./components/book-list";
import Navbar from "./components/navbar";
import BookContextProvider from "./context/book-context";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
