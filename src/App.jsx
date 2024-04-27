import Gallery from "./components/Gallery";
import SearchGallery from "./components/SearchGallery";

function App({ onNewCategory }) {
  return (
    <main className="">
      <SearchGallery />
      <Gallery />
    </main>
  );
}

export default App;
