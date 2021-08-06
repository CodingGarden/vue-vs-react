import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const formSubmitted = async (event) => {
    event.preventDefault();

    setLoading(true);
    setImages([]);

    const response = await fetch(
      `https://nature-image-api.vercel.app/search?q=${search}`
    );
    const json = await response.json();
    console.log(json.images);
    setImages(json.images);

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label>Search</label>
        <input
          name="search"
          value={search}
          placeholder="enter a search term..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <button>Submit</button>
      </form>
      {loading ? (
        <img
          src="https://cdn.betterttv.net/emote/5e7a8f53d112fc37257506ee/2x"
          alt="loading"
        />
      ) : null}
      {images.map((image) => (
        <img style={{ width: '100%' }} key={image.image} src={image.image} alt={image.title} />
      ))}
    </div>
  );
}

export default App;
