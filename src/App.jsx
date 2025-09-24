


import Footer from "./components/Footer";
import Book from "./components/Book";
import AppHeader from "./components/AppHeader";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="app">
      <div className="content">
        <AppHeader />
      </div>
      <div className="contentBody">
      <div className="addButton">
        <AddButton />
      </div>
      <div className="mainContent">
          <Book
            image="https://itbook.store/img/books/9781484290354.png"
            title="Carey Parker"
            url="https://itbook.store/books/9781484290354"
          />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
