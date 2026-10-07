import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <div className="search-container">

        <h1>Auto-Complete Search</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <p>You searched for: {query}</p>

      </div>
    </div>
  );
}

export default App;