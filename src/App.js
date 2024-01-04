import BookForm from "./components/book-form";
import BookList from "./components/book-list";
import Navbar from "./components/navbar";
import BookContextProvider from "./context/book-context";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
